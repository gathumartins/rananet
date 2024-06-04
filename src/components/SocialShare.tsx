"use client";
import React from "react";
import Image from "next/image";
import {
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from "react-share";

function SocialShare({ share, title }: any) {
  return (
    <ul className="flex justify-start place-items-center gap-4">
      <li className="tracking-tight font-rsans font-normal text-lg text-resilience">
        Share
      </li>
      <li>
        <TwitterShareButton url={share} title={title}>
          <span className="w-[30px] h-[30px] bg-neutral hover:bg-energy rounded-full flex justify-center place-items-center p-[6px]">
            <Image
              src="/images/x.svg"
              width="50"
              height="50"
              alt="X social share button icon"
            />
          </span>
        </TwitterShareButton>
      </li>
      <li>
        <LinkedinShareButton url={share}>
          <span className="w-[30px] h-[30px] bg-neutral hover:bg-energy rounded-full flex justify-center place-items-center p-[6px]">
            <Image
              src="/images/linkedin.svg"
              width="50"
              height="50"
              alt="X social share button icon"
            />
          </span>
        </LinkedinShareButton>
      </li>
      <li>
        <WhatsappShareButton url={share} title={title} separator=":: ">
          <span className="w-[30px] h-[30px] bg-neutral hover:bg-energy rounded-full flex justify-center place-items-center p-[6px]">
            <Image
              src="/images/whatsapp.svg"
              width="50"
              height="50"
              alt="X social share button icon"
            />
          </span>
        </WhatsappShareButton>
      </li>
    </ul>
  );
}

export default SocialShare;
