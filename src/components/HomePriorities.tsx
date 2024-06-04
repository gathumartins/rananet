"use client";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";

function HomePriorities({ priorities }: any) {
  return (
    <article className="py-[40px]  bg-resilience bg-blend-scree text-clarity bg-[url('/images/prioritiesbg.svg')] bg-contain bg-no-repeat bg-right-top last:bg-left-top">
      <section className="container">
        <h1 className="text-[40px] text-center font-normal mb-[20px]">
          {priorities.prioritiestitle}
        </h1>
        <p className="text-lg font-normal mb-[20px] leading-[34px] tracking-tight max-w-[900px] text-center mx-auto">
          {priorities.prioritiesdescription}
        </p>
        <Row>
          {priorities.priorities.map((priority: any, i: number) => (
            <Col xs={12} sm={6} md={6} lg={3} className="mb-[25px]" key={i}>
              <div className="rounded-lg h-full bg-clarity pt-[70px] px-[25px] pb-[25px] [&>p]:text-neutral [&>h2]:text-resilience priorities relative shadow-lg shadow-resilience">
                <div className="topRight absolute w-[70px] h-[70px] top-0 right-0 bg-growth flex justify-end place-items-start pt-[5px] pr-[5px]">
                  <Image
                    src="/images/arrow.png"
                    width="50"
                    height="50"
                    alt="Rana Priorities card arrow icon"
                    className="w-[50px] h-[50px]"
                  />
                </div>
                <h2 className="text-2xl mb-[20px]">{priority.prioritytitle}</h2>
                <p className="text-base font-normal leading-6 tracking-tight">
                  {priority.prioritydescription}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </article>
  );
}

export default HomePriorities;
