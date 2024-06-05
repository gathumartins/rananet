import { Metadata } from "next";
import React from "react";

// export async function generateMetadata(): Promise<Metadata> {
//   // fetch data
//   const seo = await fetch(
//     `${process.env.BASE_URL}/api/pagesSeo?id=cG9zdDo0OA==`,
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
  const policy = await fetch(`${process.env.BASE_URL}/api/terms`, {
    next: { revalidate: 60 },
  });
  const data = await policy.json();
  const markup = { __html: data.content };
  const bgImage = data.featuredImage.node.sourceUrl;
  return (
    <main>
      <header
        className="topBann"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container flex justify-start place-items-center">
          <h1 className="topHeroCont">
            {data.pages.customTitle !== ""
              ? data.pages.customTitle
              : data.title}
          </h1>
        </div>
      </header>
      <article className="relative">
        <section className="container py-[40px]">
          <div
            className="text-base text-resilience [&_b]:!font-bolder [&_strong]:!font-bolder [&_strong]:font-rsans [&_b]:font-rsans [&>p]:mb-[20px] [&>ol>li]:mb-[20px] [&>ol]:pl-[20px] [&>ol>li]:list-decimal [&>ol>li>ul>li]:mb-[20px] [&>ol>li>ul]:pl-[20px] [&>ol>li>ul>li]:list-disc"
            dangerouslySetInnerHTML={markup}
          ></div>
        </section>
      </article>
    </main>
  );
}

export default page;
