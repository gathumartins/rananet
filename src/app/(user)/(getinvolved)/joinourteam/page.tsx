import { Metadata } from "next";
import React from "react";
import Link from "next/link";

// export async function generateMetadata(): Promise<Metadata> {
//   // fetch data
//   const seo = await fetch(
//     `${process.env.BASE_URL}/api/pagesSeo?id=cG9zdDo1Mw==`,
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
  // const myconts = await fetch(`${process.env.BASE_URL}/api/join`, {
  //   cache: "no-store",
  // });
  // const data = await myconts.json();

  // const markup = { __html: data.page.content };
  // const bgImage = data.page.featuredImage.node.sourceUrl;
  // const careers = data.careers.edges;
  // const mydate = new Date();

  // console.log(mydate.toLocaleString());
  return (
    <h1>Career Page</h1>
    // <main>
    //   <header
    //     className="topBann"
    //     style={{ backgroundImage: `url(${bgImage})` }}
    //   >
    //     <div className="container flex justify-start place-items-center">
    //       <h1 className="topHeroCont capitalize">{data.page.title}</h1>
    //     </div>
    //   </header>
    //   <article>
    //     <section className="py-[40px]">
    //       <div className="container universal">
    //         <h2 className="mt-0 capitalize">{data.page.title}</h2>
    //         <div dangerouslySetInnerHTML={markup}></div>
    //       </div>
    //     </section>
    //     <section className="pb-[40px]">
    //       <div className="container">
    //         <h2 className="mb-[10px] text-resilience tracking-tight font-normal text-2xl mt-0">
    //           Current Opportunities
    //         </h2>
    //         <ul>
    //           {careers.length > 0 ? (
    //             <>
    //               {careers.map((career: any) => (
    //                 <li className="mb-[15px]" key={career.node.id}>
    //                   <Link
    //                     href={`/joinourteam/${career.node.slug}`}
    //                     className="text-lg leading-[29px] tracking-tight font-medium text-resilience/50 hover:text-energy underline"
    //                   >
    //                     {career.node.title}
    //                   </Link>
    //                 </li>
    //               ))}
    //             </>
    //           ) : (
    //             <li className="text-base font-bold text-resilience text-left">
    //               We are not hiring at this time. Please check back for updates
    //               on open positions.
    //             </li>
    //           )}
    //         </ul>
    //       </div>
    //     </section>
    //   </article>
    // </main>
  );
}

export default page;
