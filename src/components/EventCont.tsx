"use client";
import React from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Paginate from "./Paginate";

function EventCont({ upcoming, past }: any) {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="upcoming">
      <Row>
        <Col sm={12}>
          <Nav variant="pills" className="flex flex-row justify-start gap-4">
            <Nav.Item className="bg-zinc-300 active:bg-resilience text-resilience active:text-clarity rounded-lg">
              <Nav.Link
                href="#upcoming_events"
                eventKey="upcoming"
                className="active:bg-energy"
              >
                Upcoming Events
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="bg-zinc-300 active:bg-resilience text-resilience active:text-clarity rounded-lg">
              <Nav.Link href="#past_events" eventKey="past">
                Past Events
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={12}>
          <Tab.Content className="py-[20px]">
            <Tab.Pane eventKey="upcoming">
              <Row className={upcoming.length < 1 ? `hidden` : `visible`}>
                {upcoming.map((future: any) => (
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={4}
                    className="mb-[80px] d-flex align-items-stretch"
                    key={future.node.id}
                  >
                    <div className="shadow-lg rounded-lg">
                      <div className="relative">
                        <Image
                          src={future.node.featuredImage.node.sourceUrl}
                          width="1366"
                          height="768"
                          alt={`RANA ${future.node.ttle}`}
                          className="rounded-t-lg h-[260px]"
                        />
                        {/* <div className="absolute h-[60px] w-[60px] p-[14px] flex justify-center place-items-center rounded-l-lg bg-energy right-0 -bottom-[10px] text-clarity font-bold text-lg leading-tight tracking-tight">
                          {`${future.node.events.eventdate.slice(0, 3)}`}
                        </div> */}
                      </div>
                      <div className="px-[30px] py-[20px] bg-clarity rounded-b-lg">
                        <ul className="flex justify-between gap-4 mb-[15px]">
                          <li className="flex flex-row gap-2 justify-start text-neutral text-sm font-normal tracking-tight leading-tight">
                            <Image
                              src="/images/time.svg"
                              width="15"
                              height="15"
                              alt="event time icon"
                            />
                            <span className="uppercase">
                              {future.node.events.starttime} {""}-{""}
                              {future.node.events.endtime} {""}
                              {future.node.events.eventtimezone}
                            </span>
                          </li>
                          <li className="flex flex-row gap-2 justify-start text-neutral text-sm font-normal tracking-tight leading-tight">
                            <Image
                              src="/images/pin.png"
                              width="15"
                              height="15"
                              alt="event location icon"
                              className="h-[15px] w-[20px]"
                            />
                            <span>{future.node.events.eventvenue}</span>
                          </li>
                        </ul>
                        <h2 className="pb-[10px] mt-0 text-2xl text-resilience font-normal">
                          {future.node.title}
                        </h2>
                        <p className="text-resilience font-normal text-sm">
                          {future.node.events.eventdate}
                        </p>
                        <Link
                          href={`events/${future.node.slug}`}
                          className="text-resilience hover:text-energy mt-[20px] flex flex-row gap-3 justify-start place-items-center uppercase"
                        >
                          <span>Register Now</span>
                          <Image
                            src="/images/arrowgreen.png"
                            width="50"
                            height="50"
                            alt="Our network home page arrows"
                            className="w-[30px] h-[30px]"
                          />
                        </Link>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              <Row className={upcoming.length < 1 ? `visible` : `hidden`}>
                <h3 className="text-resilience font-bold text-base">
                  No events are currently scheduled.
                </h3>
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="past">
              <Row className={past.length < 1 ? `hidden` : `visible`}>
                {past.map((future: any) => (
                  <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    xl={4}
                    className="mb-[80px] d-flex align-items-stretch"
                    key={future.node.id}
                  >
                    <div className="shadow-lg rounded-lg">
                      <div className="relative">
                        <Image
                          src={future.node.featuredImage.node.sourceUrl}
                          width="1366"
                          height="768"
                          alt={`RANA ${future.node.ttle}`}
                          className="rounded-t-lg h-[260px]"
                        />
                      </div>
                      <div className="px-[30px] py-[20px] bg-clarity rounded-b-lg">
                        <ul className="flex justify-start gap-4 mb-[15px] pl-[0px]">
                          <li className="flex flex-row gap-2 justify-start text-neutral text-sm font-normal tracking-tight leading-tight">
                            <Image
                              src="/images/pin.png"
                              width="15"
                              height="15"
                              alt="event location icon"
                              className="h-[15px] w-[20px]"
                            />
                            <span>{future.node.events.eventvenue}</span>
                          </li>
                        </ul>
                        <h2 className="pb-[10px] mt-0 text-2xl text-resilience font-normal">
                          {future.node.title}
                        </h2>
                        <p className="text-resilience font-normal text-sm">
                          {future.node.events.eventdate}
                        </p>
                        <Link
                          href={`events/${future.node.slug}`}
                          className="text-resilience hover:text-energy mt-[20px] flex flex-row gap-3 justify-start place-items-center uppercase"
                        >
                          <span>Read More</span>
                          <Image
                            src="/images/arrowgreen.png"
                            width="50"
                            height="50"
                            alt="Our network home page arrows"
                            className="w-[30px] h-[30px]"
                          />
                        </Link>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
              <Row className={past.length < 1 ? `visible` : `hidden`}>
                <h3 className="text-resilience font-bold text-base">
                  No events are currently scheduled.
                </h3>
              </Row>
              {past.length > 6 && <Paginate allPosts={past} postsPerPage={6} />}
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default EventCont;
