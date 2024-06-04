"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import FooterBtm from "@/components/FooterBtm";

function Footer({ navs }: any) {
  return (
    <footer className="bg-resilience/95 pt-[70px] relative bg-blend-screen">
      <Container className="relative mb-[20px] z-20">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={5} className="mb-[10px]">
            <Image
              src="/images/whitelogo.svg"
              width="170"
              height="59"
              alt="RANA white logo footer section"
              className="mb-[30px]"
            />
            <p className="text-base text-clarity font-normal md:max-w-[400px]">
              RANA has been established to become an African CSO advocacy
              network working with partners across Africa at the national and
              regional level, together with global partners, to strengthen
              Africa’s resilience.
            </p>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={4}
            className="mb-[40px] pt-[30px]"
          >
            <Row className="[&>div>a]:footLinks">
              {navs.map((item: any) => {
                if (item.children.length > 0) {
                  return (
                    <Col
                      xs={6}
                      sm={6}
                      md={6}
                      className="mb-[20px]"
                      key={item.key}
                    >
                      <Dropdown key={item.key}>
                        <Dropdown.Toggle
                          id={`dropdown-${item.key}`}
                          className="bg-transparent border-none pl-0 hover:text-energy"
                        >
                          {item.title}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {item.children.map((child: any) => (
                            <Dropdown.Item
                              key={child.key}
                              className="active:bg-transparent"
                            >
                              <Link href={child.uri}>{child.title}</Link>
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  );
                } else {
                  return (
                    <Col
                      xs={6}
                      sm={6}
                      md={6}
                      className="mb-[20px]"
                      key={item.key}
                    >
                      <Link href={item.uri}>{item.title}</Link>
                    </Col>
                  );
                }
              })}
            </Row>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={8}
            xl={3}
            className="mb-[40px] flex justify-center lg:justify-end"
          >
            <div className="h-[250px] lg:w-[310px] w-full bg-resilience p-[25px] shadow-md rounded-lg">
              <h1 className="text-xl text-clarity font-normal mb-[30px] tracking-tight leading-[35px]">
                Together, we advance Africa’s resilience.
                <br />
                Join us!
              </h1>
              <Link
                target="_blank"
                href="https://airtable.com/appXxYQpHe58OMn4o/shr52vWnvJ4BslvQv"
                className="bg-clarity text-resilience hover:text-clarity hover:bg-growth rounded-lg p-[16px] w-full inline-block text-center text-base font-semibold"
              >
                Newsletter Sign-Up
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <FooterBtm />
      <div className="bg-[url('/images/footer.webp')] absolute bg-no-repeat bg-contain bottom-0 right-0 w-[763px] h-full bg-right-bottom z-0"></div>
    </footer>
  );
}

export default Footer;
