import { Metadata } from "next";
import React from "react";
import HomeHero from "../components/HomeHero";
import HomeNetwork from "../components/HomeNetwork";
import HomeNews from "../components/HomeNews";
import HomePartner from "../components/HomePartner";
import HomePriorities from "../components/HomePriorities";

// export async function generateMetadata(): Promise<Metadata> {
//   // fetch data
//   const seo = await fetch(
//     `${process.env.BASE_URL}/api/pagesSeo?id=cG9zdDo0Mw==`
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
async function HomePage(params: any) {
  const res = await fetch(`${process.env.BASE_URL}/api/homePage`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  const hero = data.page.homehero;
  const priorities = data.page.homepriorities;
  const network = data.page.homenetwork;
  const partners = data.netPartners.edges;
  const news = data.homeNews.edges;
  const featNews = news
    .slice(0, 4)
    .sort(
      (a: any, b: any) =>
        a.node.news_Resources.postOrder - b.node.news_Resources.postOrder
    );
  return (
    <>
      <main>
        <HomeHero hero={hero} />
        <HomePartner partners={partners} />
        <HomePriorities priorities={priorities} />
        <HomeNews resources={featNews} />
        <HomeNetwork network={network} />
      </main>
    </>
  );
}

export default HomePage;
