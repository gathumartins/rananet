import React from "react";
import Image from "next/image";
import Link from "next/link";

function FooterBtm() {
  const myDate = new Date();
  return (
    <section className="bg-[#172C2D] ring-1 ring-black pt-[15px]">
      <div className="container flex max-sm:flex-col-reverse justify-between max-sm:gap-2 gap-7 place-items-center">
        <p className="text-clarity text-sm mb-[15px]">
          &copy; Copyright {myDate.getFullYear()} by Resilience Action Network
          Africa (RANA)
        </p>
        <ul className="flex gap-2 pl-0 mb-[15px] z-20">
          <li className="w-[48px] h-[48px] rounded-full bg-resilience/100 cursor-pointer hover:bg-energy hover:text-resilience mb-0 flex justify-center place-items-center">
            <Link
              href="https://www.linkedin.com/company/resilience-action-network-africa/about/"
              target="_blank"
            >
              <Image
                src="/images/linkedin.svg"
                alt="RANA Linkedin Social Icon Footer"
                width="20"
                height="20"
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FooterBtm;
