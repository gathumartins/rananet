import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import SocialShare from "../../../../../components/SocialShare";

type Props = {
  params: { eventId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const pageType = "event";
//   const postSlug = params.eventId;
//   const seo = await fetch(
//     `${process.env.BASE_URL}/api/eventSeo?type=${pageType}&slug=${postSlug}`,
//     {
//       next: { revalidate: 60 },
//     }
//   ).then((res) => res.json());
//   const data = seo.post.event.seo;
//   return {
//     title: data.title,
//     description: data.metaDesc,
//     alternates: {
//       canonical: data.opengraphUrl,
//     },
//     openGraph: {
//       images: [data.opengraphImage.sourceUrl],
//     },
//   };
// }

async function page({ params }: any) {
  const slug = params.eventId;
  const query = `
  query NewQuery($slug:ID!) {
  anEvent:event(id: $slug, idType: URI) {
    id
    title
    slug
    uri
    content
    featuredImage {
      node {
        sourceUrl
      }
    }
    events {
      registerbutton {
        buttonLink
        buttonText
      }
      endtime
      eventdate
      eventtimezone
      eventvenue
    }
  }
  allEvents:events {
    edges {
      node {
        id
        title
        slug
        events {
        endtime
        eventdate
        eventtimezone
        eventvenue
      }
      }
    }
  }
}
  `;
  const variables = {
    slug,
  };
  const res = await fetch(`${process.env.WORDPRESS_API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 },
    body: JSON.stringify({ query, variables }),
  });
  const data = await res.json();
  const anEvent = data.data.anEvent;
  const allEvents = data.data.allEvents.edges;
  const eventID = anEvent.id;
  const currentDate = new Date();
  const upcomingEvents = allEvents.filter((singEvent: any) => {
    const eventDate = new Date(singEvent.node.events.eventdate);
    return eventDate > currentDate;
  });
  const pastEvents = allEvents.filter((singEvent: any) => {
    const eventDate = new Date(singEvent.node.events.eventdate);
    return eventDate < currentDate;
  });
  const eventDate = new Date(anEvent.events.eventdate);
  let otherEvents: [] = [];
  const eventCheck = (dateOne: Date, dateTwo: Date) => {
    if (dateOne < dateTwo) {
      otherEvents = pastEvents;
    } else {
      otherEvents = upcomingEvents;
    }
    return otherEvents;
  };
  eventCheck(eventDate, currentDate);
  const index = otherEvents.findIndex(
    (aEvent: { node: { id: any } }) => aEvent.node.id === eventID
  );
  let firstPart = otherEvents.slice(0, index);
  let secondPart = otherEvents.slice(index + 1);
  let longOtherEvents = [...firstPart, ...secondPart];
  let relatedEvents = longOtherEvents.slice(0, 5);
  // let dateBtn = new Date(anEvent.node.events.eventdate);
  return (
    <article className="py-[40px]">
      <section className="container">
        <Row>
          <Col xs={12} md={7} lg={8} className="mb-[20px]">
            <header>
              <h1 className="text-resilience tracking-tight font-normal text-3xl capitalize">
                {anEvent.title}
              </h1>
            </header>
          </Col>
          <Col xs={12} md={7} lg={8} className="mb-[20px]">
            <main className="innerCont tracking-tight font-normal text-resilience headingsMargins [&>p]:text-base">
              <figure>
                <Image
                  src={anEvent.featuredImage.node.sourceUrl}
                  width="1366"
                  height="768"
                  alt={`RANA ${anEvent.title}`}
                  className="w-full rounded-xl"
                />
              </figure>
              <nav className="share mb-[25px] mt-[15px] flex justify-end">
                <SocialShare
                  share={`${process.env.BASE_URL}/events/${anEvent.uri}`}
                  title={anEvent.title}
                />
              </nav>
              <div
                className="universal"
                dangerouslySetInnerHTML={{ __html: anEvent.content }}
              ></div>
              {eventDate < currentDate
                ? anEvent.events.registerbutton.buttonLink && (
                    <Link
                      href={anEvent.events.registerbutton.buttonLink}
                      target="_blank"
                      className="mt-[40px] bg-resilience text-clarity hover:bg-energy rounded-lg text-center py-[13px] px-[40px] hidden"
                    >
                      {anEvent.events.registerbutton.buttonText}
                    </Link>
                  )
                : anEvent.events.registerbutton.buttonLink && (
                    <Link
                      href={anEvent.events.registerbutton.buttonLink}
                      target="_blank"
                      className={
                        anEvent.events.registerbutton.buttonLink == null
                          ? `hidden`
                          : `mt-[40px] inline-block bg-resilience text-clarity hover:bg-energy rounded-lg text-center py-[13px] px-[40px]`
                      }
                    >
                      {anEvent.events.registerbutton.buttonText}
                    </Link>
                  )}
            </main>
          </Col>
          <Col xs={12} md={5} lg={4} className="mb-[20px]">
            <aside className="bg-slate-100 rounded-lg p-[30px]">
              <h2 className="mt-0">
                {eventDate > currentDate
                  ? "Other Upcoming Events"
                  : "Other Past Events"}
              </h2>
              <ul>
                {relatedEvents.map((otherEvent: any) => (
                  <li
                    className="border-solid border-b-[1px] border-resilience/20 pb-[8px] mb-[20px]"
                    key={otherEvent.node.id}
                  >
                    <Link
                      href={`/events/${otherEvent.node.uri}`}
                      className="text-sm leading-[29px] tracking-tight font-medium text-resilience/70 hover:text-energy underline"
                    >
                      {otherEvent.node.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </Col>
        </Row>
      </section>
    </article>
  );
}

export default page;
