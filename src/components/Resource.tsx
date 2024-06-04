"use client";
import React from "react";
import { Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function Resource({ newspiece }: any) {
  return (
    <Col
      xs={12}
      sm={12}
      md={6}
      lg={6}
      xl={4}
      className="mb-[80px] d-flex align-items-stretch"
    >
      <div className="shadow-lg rounded-lg flex flex-col">
        <Image
          src={newspiece.node.featuredImage.node.sourceUrl}
          width="1366"
          height="768"
          alt="RANA resouce and news Image"
          className="rounded-t-lg"
        />
        <div className="px-[30px] py-[20px] bg-clarity rounded-b-lg flex flex-col flex-grow justify-between">
          <h2 className="pb-[10px] mt-0 text-2xl text-resilience font-normal">
            {newspiece.node.title}
          </h2>
          <p className="text-resilience font-normal text-base">
            {newspiece.node.news_Resources.dateauthored}
          </p>
          <Link
            href={`/news/${newspiece.node.slug}`}
            className="text-resilience hover:text-energy mt-[20px] flex flex-row gap-3 justify-start place-items-center font-bold text-sm"
          >
            <Image
              src="/images/doubleright.png"
              width="30"
              height="30"
              alt="Our network home page arrows"
            />{" "}
            <span>READ MORE</span>
          </Link>
        </div>
      </div>
    </Col>
  );
}

export default Resource;
