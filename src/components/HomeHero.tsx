"use client";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";
import Image from "next/image";

function HomeHero({ hero }: any) {
  return (
    <article className="relative">
      <section className="heroCapt absolute top-0 left-0 z-20">
        <div className="text-left container heroCapCont items-start">
          <div className="max-w-[600px]">
            <h1 className="heroTitle mt-0">{hero.herotitle}</h1>
            <p className="heroCont">{hero.herodesc}</p>
            <Link href={`${hero.actionbutton.actionLink}`} className="heroBtn">
              {hero.actionbutton.actionTitle}
            </Link>
          </div>
        </div>
      </section>
      <Carousel
        pause="hover"
        indicators={false}
        controls={false}
        className="shadow-sm bg-clarity"
        fade
      >
        {hero.heroimgs.map((heroimg: any, i: number) => (
          <Carousel.Item key={i}>
            <Image
              src={`${heroimg.image.sourceUrl}`}
              alt={`${heroimg.imagetitle}`}
              className="heroImg"
              width="2880"
              height="1364"
              priority
            />
          </Carousel.Item>
        ))}

        {/* <Carousel.Item>
          <Image
            src="/images/bannerfour.webp"
            alt="firebanner"
            className="heroImg"
            width="1920"
            height="820"
            priority
          />
          <Carousel.Caption className='heroCapt'>
          <div className="text-left container max-sm:px-[16px] items-start">
            <div className="max-w-[600px]">
              <h1 className="heroTitle">{heroTitle}</h1>
              <p className="heroCont">{heroPara}</p>
              <Link href={heroBtn.link} className="heroBtn">{heroBtn.title}</Link>
            </div>
          </div>
        </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </article>
  );
}

export default HomeHero;
