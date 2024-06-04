"use client";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";

function AboutNav() {
  return (
    <nav>
      <ul className="block sm:hidden">
        <NavDropdown
          title="Who We Are"
          className="w-full border-none text-resilience text-lg aboutDrop px-[30px]"
        >
          <Dropdown.Item className="text-resilience" href="#mission">
            Our Mission
          </Dropdown.Item>
          <Dropdown.Item className="text-resilience" href="#ourapproach">
            Our Approach
          </Dropdown.Item>
          <Dropdown.Item className="text-resilience" href="#whatwedo">
            What We Do
          </Dropdown.Item>
        </NavDropdown>
      </ul>
      <ul className="container sm:flex hidden justify-start flex-row max-sm:flex-col max-sm:justify-center max-w-[400px]:gap-y-4 gap-2">
        <li className="max-sm:inline-block max-sm:mb-[20px]">
          <a
            href="#mission"
            className="border-1 border-solid border-resilience p-[10px] text-center bg-clarity hover:bg-energy text-resilience hover:text-clarity hover:border-energy rounded-md"
          >
            Our Mission
          </a>
        </li>
        <li className="max-sm:inline-block max-sm:mb-[20px]">
          <a
            href="#ourapproach"
            className="border-1 border-solid border-resilience p-[10px] text-center bg-clarity hover:bg-energy text-resilience hover:text-clarity hover:border-energy rounded-md"
          >
            Our Approach
          </a>
        </li>
        <li className="max-sm:inline-block max-sm:mb-[20px]">
          <a
            href="#whatwedo"
            className="border-1 border-solid border-resilience p-[10px] text-center bg-clarity hover:bg-energy text-resilience hover:text-clarity hover:border-energy rounded-md"
          >
            What We Do
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default AboutNav;
