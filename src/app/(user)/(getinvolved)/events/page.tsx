import { Metadata } from "next";
import React from "react";
import { Row, Col } from "react-bootstrap";
import EventCont from "../../../../components/EventCont";

// export async function generateMetadata(): Promise<Metadata> {
//   // fetch data
//   const seo = await fetch(
//     `${process.env.BASE_URL}/api/pagesSeo?id=cG9zdDo1NA==`,
//     {
//       next: { revalidate: 60 },
//     }
//   ).then((res) => res.json());

//   // optionally access and extend (rather than replace) parent metadat

//   return {
//     title: seo.pageSeo.title,
//     description: seo.pageSeo.metaDesc,
//     alternates: {
//       canonical: seo.pageSeo.opengraphUrl,
//     },
//     openGraph: {
//       images: [seo.pageSeo.opengraphImage.sourceUrl],
//     },
//   };
// }
async function page() {
  const myconts = await fetch(`${process.env.BASE_URL}/api/evnt`, {
    cache: "no-store",
  });
  const data = await myconts.json();

  const markup = { __html: data.eventPage.content };
  const bgImage = data.eventPage.featuredImage.node.sourceUrl;
  const allEvents = data.allEvents.edges;
  // const testDate = new Date("November 10, 2023");
  const currentDate = new Date();
  // console.log(allEvents);
  const upcomingEvents = allEvents.filter((singEvent: any) => {
    const eventDate = new Date(singEvent.node.events.eventdate);
    return eventDate > currentDate;
  });
  const pastEvents = allEvents.filter((singEvent: any) => {
    const eventDate = new Date(singEvent.node.events.eventdate);
    return eventDate < currentDate;
  });

  return (
    <main>
      <header
        className="topBann"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container flex justify-start place-items-center">
          <h1 className="topHeroCont capitalize">{data.eventPage.title}</h1>
        </div>
      </header>
      <article className="py-[40px]">
        <section className="container">
          <Row>
            <Col xs={12} className="universal mb-[30px]">
              <h2 className="mt-0 capitalize">{data.title}</h2>
              <div dangerouslySetInnerHTML={markup}></div>
            </Col>
            <Col>
              <EventCont upcoming={upcomingEvents} past={pastEvents} />
            </Col>
          </Row>
        </section>
      </article>
    </main>
  );
}

export default page;
