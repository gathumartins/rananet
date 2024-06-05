import { Metadata } from "next";
import React from "react";
import { Row } from "react-bootstrap";
import Resource from "../../../components/Resource";
import Paginate from "../../../components/Paginate";
import Featured2 from "../../../components/Featured2";

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const seo = await fetch(
    `${process.env.BASE_URL}/api/pagesSeo?id=cG9zdDo1Nw==`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());

  // optionally access and extend (rather than replace) parent metadat

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
  const myconts = await fetch(`${process.env.BASE_URL}/api/resources`, {
    cache: "no-store",
  });
  const data = await myconts.json();
  const bgImage = data.page.featuredImage.node.sourceUrl;
  const news = data.allNews.edges;
  const allFeat = data.featNews.edges;
  const resources = allFeat
    .slice(0, 4)
    .sort(
      (a: any, b: any) =>
        a.node.news_Resources.postOrder - b.node.news_Resources.postOrder
    );
  let categoryToRemove = "featuredNews";

  const notFeat = news.filter((singleNotFeat: any) => {
    return !singleNotFeat.node.categories.edges.some(
      (edge: any) => edge.node.name === categoryToRemove
    );
  });
  return (
    <main>
      <header
        className="topBann"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container flex justify-start place-items-center">
          <h1 className="text-clarity tracking-tight font-normal text-5xl">
            {data.page.title}
          </h1>
        </div>
      </header>
      <article className="py-[40px]">
        <section className="container pb-[20px]">
          <h2 className="text-resilience mb-[20px] text-4xl">
            Featured Policies & Actions
          </h2>
          <Featured2 resources={resources} />
        </section>
        <section className={notFeat.length < 1 ? "hidden" : "container"}>
          <Row className="">
            {notFeat?.map((piece: any) => (
              <Resource key={piece.node.id} newspiece={piece} />
            ))}
          </Row>
          <div className="flex justify-center">
            {notFeat.length > 12 && (
              <Paginate allPosts={notFeat} postsPerPage={12} />
            )}
          </div>
        </section>
      </article>
    </main>
  );
}

export default page;
