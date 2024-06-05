import { Metadata } from "next";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

// export async function generateMetadata(): Promise<Metadata> {
//   const seo = await fetch(
//     `${process.env.BASE_URL}/api/pagesSeo?id=cG9zdDo1NQ==`,
//     {
//       next: { revalidate: 60 },
//     }
//   ).then((res) => res.json());
//   return {
//     title: seo.pageSeo.title,
//     description: seo.pageSeo.metaDesc,
//     alternates: {
//       canonical: seo.pageSeo.opengraphUrl,
//     },
//     openGraph: {
//       images: [seo.pageSeo.opengraphImage.sourceUrl],
//     },
//   };
// }

async function page() {
  const mynet = await fetch(`${process.env.BASE_URL}/api/ournet`, {
    cache: "no-store",
  });
  const data = await mynet.json();

  const markup = { __html: data.netPage.content };
  const bgImage = data.netPage.featuredImage.node.sourceUrl;
  const partners = data.netPartners.edges;
  console.log(partners.length);
  return (
    <main>
      <header
        className="topBann"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container flex justify-start place-items-center">
          <h1 className="topHeroCont capitalize">
            {data.netPage.pages.customTitle != ""
              ? data.netPage.pages.customTitle
              : data.netPage.title}
          </h1>
        </div>
      </header>
      <article className="pb-[40px]">
        <section className="pt-[40px]">
          <div className="container">
            <div
              className="![&>p]:mb-[20px] universal"
              dangerouslySetInnerHTML={markup}
            ></div>
            <div className="w-full h-0 border border-neutral-200"></div>
          </div>
        </section>
        <section className="pt-[40px]">
          <div className="container text-resilience font-normal tracking-tight text-2xl [&>h2]:mb-[20px] md:bg-[url('/images/growth.png')] object-fit bg-right-top bg-repeat-y">
            <h2 className="mt-0">Resilience Action Network Africa Partners</h2>
            <Row>
              <Col xs={12} sm={12} md={12} className="md:pr-[110px]">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-x-7 gap-y-8">
                  {partners?.map((partner: any) => (
                    partner.node.partners.website === null ? <li key={partner.node.id}>
                      <div className="relative inline-block w-[200px] h-[90px]">
                         <Image
                          className="grayscale hover:grayscale-0 object-fill"
                          src={partner.node.featuredImage.node.sourceUrl}
                          width="200"
                          height="90"
                          alt={`RANA Partner ${partner.node.title} Logo`}
                          loading="lazy"
                        />
                      </div>
                    </li> :
                    <li key={partner.node.id}>
                      <Link
                        href={partner.node.partners.website}
                        target="_blank"
                        className="relative inline-block w-[200px] h-[90px]"
                      >
                        <Image
                          className="grayscale hover:grayscale-0 object-fill"
                          src={partner.node.featuredImage.node.sourceUrl}
                          width="200"
                          height="90"
                          alt={`RANA Partner ${partner.node.title} Logo`}
                          loading="lazy"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </div>
        </section>
      </article>
    </main>
  );
}

export default page;
