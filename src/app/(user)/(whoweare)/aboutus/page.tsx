import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import AboutNav from "../../../../components/AboutNav";

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const seo = await fetch(
    `${process.env.BASE_URL}/api/pagesSeo?id=cG9zdDo1OQ==`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadat
  // console.log(seo);
  return {
    title: seo.pageSeo.title,
    description: seo.pageSeo.metaDesc,
    alternates: {
      canonical: seo.pageSeo.opengraphUrl,
    },
    openGraph: {
      images: [seo.pageSeo.opengraphImage.sourceUrl],
    },
  };
}
async function page() {
  const myconts = await fetch(`${process.env.BASE_URL}/api/about`, {
    cache: "no-store",
  });
  const data = await myconts.json();

  const markup = { __html: data.content };
  const bgImage = data.featuredImage.node.sourceUrl;
  const missionCont = { __html: data.aboutpage.mission.description };
  const whatCont = { __html: data.aboutpage.whatWeDo.description };
  const approachCont = { __html: data.aboutpage.approach.description };

  return (
    <main className="relative">
      <header
        className="topBann"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container flex justify-start place-items-center">
          <h1 className="topHeroCont capitalize">
            {data.pages.customTitle != "" ? data.pages.customTitle : data.title}
          </h1>
        </div>
      </header>
      <section className="bg-clarity w-full  py-[15px] sticky top-[70px] z-2">
        <AboutNav />
      </section>
      <article className="relative h-full overflow-y-auto">
        <section id="mission" className="offset"></section>
        <section className="bg-no-repeat bg-cover bg-center">
          <div className="max-lg:bg-clarity/50 py-[40px] sm:bg-[url('/images/growth.png')] object-fit bg-left-top bg-repeat-y">
            <div className="container aboutus sm:pl-[90px]">
              <div className="">
                <h2 className="capitalize">{data.aboutpage.mission.title}</h2>
                <div
                  className="universal [&_b]:!font-bolder [&_strong]:!font-bolder [&_strong]:font-rsans [&_b]:font-rsans"
                  dangerouslySetInnerHTML={missionCont}
                ></div>
              </div>
              {/* <figure className="order-1">
                <Image
                  src={data.aboutpage.mission.image.sourceUrl}
                  width="396"
                  height="400"
                  alt="RANA About us page illustrations"
                  priority
                  className="rounded-xl"
                />
              </figure> */}
            </div>
          </div>
        </section>
        <section
          id="ourapproach"
          className="pt-[40px] pb-[20px] bg-clarity odd:bg-growth/20 odd:bg-[url('/images/footer.webp')] bg-no-repeat bg-contain bg-right-bottom bg-blend-multiply offset"
        >
          <div className="container aboutus">
            <div className="md:w-[70%] md:mx-auto text-center ">
              <h2 className="capitalize">{data.aboutpage.approach.title}</h2>
              <div
                className="universal [&_b]:!font-bolder [&_strong]:!font-bolder [&_strong]:font-rsans [&_b]:font-rsans"
                dangerouslySetInnerHTML={approachCont}
              ></div>
            </div>
            {/* <figure>
              <Image src={data.aboutpage.approach.image.sourceUrl} width="300" height="" alt="RANA About us page illustrations" />
            </figure> */}
          </div>
        </section>
        <section
          id="whatwedo"
          className="bg-no-repeat bg-cover bg-center offset"
        >
          {/* bg-[url('/images/aboutbg.png')] */}
          <div className="py-[40px] max-lg:bg-clarity/50 sm:bg-[url('/images/growth.png')] object-fit bg-left-top bg-repeat-y">
            <div className="container aboutus sm:pl-[90px]">
              <div className="">
                <h2 className="capitalize">{data.aboutpage.whatWeDo.title}</h2>
                <div
                  dangerouslySetInnerHTML={whatCont}
                  className="universal"
                ></div>
              </div>
              {/* <figure className="md:order-first">
                <Image
                  src={data.aboutpage.approach.image.sourceUrl}
                  width="399"
                  height="400"
                  alt="RANA About us page illustrations"
                  priority
                  className="rounded-xl"
                />
              </figure> */}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

export default page;
