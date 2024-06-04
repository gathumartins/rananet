import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import SocialShare from "./SocialShare";

function EventPost(props: any) {
  const { anEvent, relatedEvents } = props;
  const currentDate = new Date();
  const eventDate = new Date(anEvent.events.eventdate);
  // console.log(relatedEvents);
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
                  src={anEvent.featuredImage?.node.sourceUrl}
                  width="1366"
                  height="768"
                  alt={`RANA ${anEvent.title}`}
                  className="w-full rounded-xl"
                />
              </figure>
              <nav className="share mb-[25px] mt-[15px] flex justify-end">
                <SocialShare
                  share={`${process.env.BASE_URL}/events`}
                  title={`anEvent.title`}
                />
              </nav>
              <div
                className="universal"
                dangerouslySetInnerHTML={{ __html: anEvent.content }}
              ></div>
              {eventDate < currentDate ? (
                <Link
                  href={
                    anEvent.events.registerbutton.buttonLink != null
                      ? anEvent.events.registerbutton.buttonLink
                      : "/"
                  }
                  target="_blank"
                  className="mt-[40px] bg-resilience text-clarity hover:bg-energy rounded-lg text-center py-[13px] px-[40px] hidden"
                >
                  {anEvent.events.registerbutton.buttonText}
                </Link>
              ) : (
                <Link
                  href={
                    anEvent.events.registerbutton.buttonLink != null
                      ? anEvent.events.registerbutton.buttonLink
                      : "/"
                  }
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
            <aside className="bg-slate-100 rounded-lg p-[30px] min-h-[150px]">
              <h2 className="mt-0">Other Upcoming Events</h2>
              <ul>
                {relatedEvents?.map((otherEvent: any) => (
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

export default EventPost;
