import React from "react";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import FooterBtm from "../components/FooterBtm";
import Header from "../components/Header";
import flatListToHierarchical from "../lib/utils/flat";

export default async function NotFound() {

  return (
    <div className="min-h-full">
      <header className="sticky top-0"></header>
      <main className="container flex flex-col justify-center place-items-center min-h-[700px]">
        <Image
          src="/images/404.webp"
          width="750"
          height="286"
          alt="RANA 404 image"
        />
        <p className="py-[40px] text-4xl text-resilience text-center font-varela font-normal tracking-tight leading-tight">
          We’re sorry, the page you are looking for doesn’t exist!
        </p>
        <Link
          href="/"
          className="px-[30px] py-[22px] rounded-[10px] bg-resilience text-clarity no-underline hover:bg-energy font-varela font-normal leading-tight tracking-tight text-lg"
        >
          Let's get you back to RANA's home
        </Link>
      </main>
    </div>
  );
}
