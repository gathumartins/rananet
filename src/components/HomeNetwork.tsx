import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HomeNetwork({ network }: any) {
  return (
    <article className="py-[25px]  bg-growth bg-blend-scree text-clarity bg-[url('/images/networkbg.svg')] bg-contain bg-no-repeat bg-left-top last:bg-left-top">
      <section className="container">
        <h1 className="text-[40px] text-center font-normal mb-[40px]">
          {network.networktitle}
        </h1>
        <div className="max-w-[950px] mx-auto">
          <Row className="equal-height-row">
            {network.networks.map((network: any, i: number) => (
              <Col
                xs={12}
                sm={6}
                md={4}
                className="mb-[25px] flex felx-col"
                key={i}
              >
                <div className="flex flex-col items-stretch rounded-lg rounded-tr-xl rounder-tl-xl shadow-md bg-clarity flex-grow">
                  <div className="relative rounded-tr-lg rounded-tl-lg">
                    <Image
                      src={network.networkimage.sourceUrl}
                      width="315"
                      height="296"
                      alt="RANA Home psge our network mission card image"
                      className="w-full rounded-tl-lg rounded-tr-lg"
                    />
                    <div className="px-[25px] py-[20px] absolute bottom-0">
                      <h2 className="font-normal text-clarity text-2xl">
                        {network.networktitle}
                      </h2>
                    </div>
                  </div>
                  <div className="p-[25px] bg-clarity rounded-bl-lg rounded-br-lg flex flex-col justify-between place-items-end flex-grow">
                    <p className="text-neutral text-base font-normal leading-6">
                      {network.networkdescription}
                    </p>
                    <Link
                      href={network.networkLink}
                      className="self-end mt-[20px] text-growth hover:text-energy transition-all flex gap-2"
                    >
                      <span>READ MORE</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </article>
  );
}

export default HomeNetwork;
