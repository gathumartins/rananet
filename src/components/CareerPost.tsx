import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import SocialShare from "./SocialShare";

function CareerPost(props: any) {
  const { career, otherJobs } = props;
  return (
    <article className="py-[40px]">
      <section className="container">
        <Row>
          <Col xs={12} md={7} lg={8} className="mb-[20px]">
            <header>
              <h1 className="text-resilience tracking-tight font-normal text-3xl capitalize">
                {career.title}
              </h1>
            </header>
          </Col>
          <Col xs={12} md={7} lg={8} className="mb-[20px]">
            <main className="innerCont tracking-tight font-normal text-resilience headingsMargins [&>p]:text-base">
              <figure>
                <Image
                  src={career.featuredImage.node.sourceUrl}
                  width="1366"
                  height="768"
                  alt={`RANA ${career.title} job image`}
                  className="w-full"
                />
              </figure>
              <nav className="share mt-[20px] flex flex-row flex-wrap gap-5 justify-end">
                <SocialShare
                  share={`${process.env.BASE_URL}/joinourteam`}
                  title={`${career.title}`}
                />
              </nav>
              <div
                className="universal"
                dangerouslySetInnerHTML={{ __html: career.content }}
              ></div>
              {career.careers.applyLink.link && (
                <Link
                  href={career.careers.applyLink.link}
                  target="_blank"
                  className="mt-[40px] inline-block bg-resilience text-clarity hover:bg-energy rounded-lg text-center py-[13px] px-[40px]"
                >
                  {career.careers.applyLink.buttonText}
                </Link>
              )}
            </main>
          </Col>
          <Col xs={12} md={5} lg={4} className="mb-[20px]">
            <aside className="bg-slate-100 rounded-lg p-[30px] min-h-[300px]">
              <h2 className="mt-0">Other Job Opportunities</h2>
              <ul>
                {otherJobs?.map((job: any) => (
                  <li
                    className="border-solid border-b-[1px] border-resilience/20 pb-[8px] mb-[20px]"
                    key={job.node.id}
                  >
                    <Link
                      href={`/joinourteam/${job.node.slug}`}
                      className="text-sm leading-[29px] tracking-tight font-medium text-resilience/70 hover:text-energy underline"
                    >
                      {job.node.title}
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

export default CareerPost;
