import { Metadata } from "next";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

// export async function generateMetadata(): Promise<Metadata> {
//   // fetch data
//   const seo = await fetch(
//     `${process.env.BASE_URL}/api/pagesSeo?id=cG9zdDo1MQ==`,
//     {
//       next: { revalidate: 60 },
//     }
//   ).then((res) => res.json());

//   // optionally access and extend (rather than replace) parent metadat

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
  // const myconts = await fetch(`${process.env.BASE_URL}/api/contacts`, {
  //   cache: "no-store",
  // });
  // const data = await myconts.json();

  // const markup = { __html: data.content };
  // const bgImage = data.featuredImage.node.sourceUrl;

  return (
    <h1>Test</h1>
    // <main>
    //   <header
    //     className="topBann"
    //     style={{ backgroundImage: `url(${bgImage})` }}
    //   >
    //     <div className="container flex justify-start place-items-center">
    //       <h1 className="topHeroCont capitalize">{data.title}</h1>
    //     </div>
    //   </header>
    //   <section className="py-[40px]">
    //     <div className="container">
    //       <Row>
    //         <Col
    //           xs={12}
    //           sm={12}
    //           md={12}
    //           lg={12}
    //           className="universal mb-[30px]"
    //         >
    //           <h2 className="mt-0 capitalize">{data.title}</h2>
    //           <div
    //             className="universal [&>p]:mb-[20px]"
    //             dangerouslySetInnerHTML={markup}
    //           ></div>
    //         </Col>
    //         <ContactForm />
    //       </Row>
    //     </div>
    //   </section>
    // </main>
  );
}

export default page;
