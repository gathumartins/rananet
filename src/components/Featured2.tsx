"use client";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

function Featured2({ resources }: any) {
  const firstNews = resources[0];
  const otherNews = resources.slice(1);
  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={7} className="mb-[20px]">
        <Link
          href={`news/${firstNews.node.slug}`}
          className="[&_h2]:text-resilience [&_h2]:hover:text-energy newsadd"
        >
          <Image
            width="723"
            height="315"
            src={firstNews.node.featuredImage.node.sourceUrl}
            alt={`RANA ${firstNews.node.title}`}
            className="rounded-lg mb-[15px]"
          />
          <div>
            <h2 className="text-lg sm:text-2xl xl:text-2xl">
              {firstNews.node.title}
            </h2>
          </div>
        </Link>
      </Col>
      <Col xs={12} sm={12} md={12} lg={5}>
        <Row>
          {otherNews?.map((resource: any) => (
            <Col xs={12} className="mb-[20px]" key={resource.node.id}>
              <Link
                href={`news/${resource.node.slug}`}
                className="[&_h2]:text-resilience [&_h2]:hover:text-energy newsadd"
              >
                <Row>
                  <Col xs={12} sm={6} md={4}>
                    <Image
                      width="1366"
                      height="768"
                      src={resource.node.featuredImage.node.sourceUrl}
                      alt={`RANA ${resource.node.title}`}
                      className="rounded-lg mb-[15px]"
                    />
                  </Col>
                  <Col xs={12} sm={6} md={8}>
                    <h2 className="text-lg md:text-base xl:text-lg">
                      {resource.node.title}
                    </h2>
                  </Col>
                </Row>
              </Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default Featured2;
