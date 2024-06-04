"use client";
import React from "react";
import { Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

function Resource2({ newspiece }: any) {
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
        <Link
          href={`/news/${newspiece.node.slug}`}
          className="[&_h2]:text-resilience [&_h2]:hover:text-energy [&_img]:scale-100 hover:[&_img]:scale-[101%] overflow-hidden transition-all !duration-1000 ease-in mt-[20px] flex flex-col flex-grow gap-3 justify-start place-items-center font-bold text-sm"
        >
          <Image
            src={newspiece.node.featuredImage.node.sourceUrl}
            width="1366"
            height="768"
            alt="RANA resouce and news Image"
            className="rounded-t-lg"
          />
          <h2 className="mx-[30px] mt-0 text-lg font-medium flex-grow">
            {newspiece.node.title}
          </h2>
        </Link>

        <div className="px-[30px] pb-[20px] bg-clarity rounded-b-lg flex flex-col">
          {newspiece.node.news_Resources.author && (
            <Link
              href={`/author/${newspiece.node.news_Resources.author[0].slug}`}
              className="my-[15px] text-growth hover:text-energy"
            >
              {newspiece.node.news_Resources.author[0].name}
            </Link>
          )}
          <p className="text-neutral font-normal text-base">
            {newspiece.node.news_Resources.dateauthored}
          </p>
        </div>
      </div>
    </Col>
  );
}

export default Resource2;
