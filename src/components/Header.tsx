"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Navbar, Container, Offcanvas } from "react-bootstrap";
import TopNav from "@/components/TopNav";

function Header(props: any) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(props.sign);
  return (
    <Navbar
      expand="xl"
      className="bg-nav/60 backdrop-blur-md shadow-md sticky top-0 z-30 py-[0px]"
    >
      <Container>
        <Navbar.Brand href="/">
          <Image
            src="/images/navlogo.webp"
            width="866"
            height="288"
            alt="Rana logo in fill color top navigation"
            className="w-[130px] my-[8px]"
            priority
          />
        </Navbar.Brand>
        <div
          role="button"
          title="show menu"
          className="w-[50px] h-[50px] p-[9px] border-1 border-solid border-energy hover:border-resilience rounded-sm menuhide"
          onClick={handleShow}
        >
          <Image
            src="/images/menu.svg"
            width="32"
            height="32"
            alt="RANA Humberger menu to open mobile menu drawer"
            className="mx-auto"
          />
        </div>
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="ml-[30px] hidden xl:visible"
        >
          <TopNav navs={props} />
        </Navbar.Collapse>
        {/* mobile navigation */}
        <Offcanvas
          show={show}
          onHide={handleClose}
          className="xl:hidden bg-clarity/90 backdrop-blur text-clarity w-full"
          backdrop={false}
          placement="end"
        >
          <Offcanvas.Header className="text-clarity py-0 border-b-2">
            <Image
              width="866"
              height="288"
              src="/images/logotrans.png"
              alt="Mobile menu top logo"
              className="w-[130px] my-[8px]"
            />
            <div role="button" title="close button" onClick={handleClose}>
              <Image
                src="/images/close.svg"
                width="30"
                height="30"
                alt="Mobile menu close button"
                className="border-none"
              />
            </div>
          </Offcanvas.Header>
          <Offcanvas.Body className="flex flex-col justify-start gap-4 w-full">
            <TopNav navs={props} />
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
