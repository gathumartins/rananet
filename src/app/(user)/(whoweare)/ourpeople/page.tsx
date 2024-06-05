import { Metadata } from "next";
import React from "react";
import Staff from "../../../../components/Staff";

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const seo = await fetch(
    `${process.env.BASE_URL}/api/pagesSeo?id=cG9zdDo2MA==`,
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
  const myconts = await fetch(`${process.env.BASE_URL}/api/people`, {
    cache: "no-store",
  });
  const pagedata = await myconts.json();

  const markup = { __html: pagedata.page.content };
  const bgImage = pagedata.page.featuredImage.node.sourceUrl;
  const team = pagedata.coreTeam.edges;
  const board = pagedata.boardTeam.edges;

  return (
    <main>
      <header
        className="topBann"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container flex justify-start place-items-center">
          <h1 className="topHeroCont capitalize">{pagedata.page.title}</h1>
        </div>
      </header>
      <article>
        <section id="mission" className="pt-[40px] pb-[20px] bg-clarity">
          <div className="container ourTeam">
            <div className="max-w-[1000px] mx-auto text-center">
              <h2 className="capitalize">
                {pagedata.page.pages.customTitle != ""
                  ? pagedata.page.pages.customTitle
                  : pagedata.page.title}
              </h2>
            </div>
          </div>
        </section>
        <section className="mb-[40px]">
          <div className="container">
            <div className="max-w-[1000px] mx-auto text-center">
              <div className="universal" dangerouslySetInnerHTML={markup}></div>
            </div>
          </div>
        </section>
        {team.length > 0 ? (
          <section className="mb-[40px]">
            <div className="container max-w-[800px] flex justify-between flex-wrap gap-x-10">
              {team.map((staff: any, i: number) => (
                <Staff staff={staff} key={staff.node.id} />
              ))}
            </div>
          </section>
        ) : (
          ""
        )}
        {board.length > 0 ? (
          <section className="mb-[40px]">
            <div className="container">
              <h2 className="capitalize text-center">Our Board</h2>
            </div>
            <div className="container max-w-[800px] grid md:grid-cols-3 grid-cols-1 gap-x-10">
              {team.map((staff: any, i: number) => (
                <Staff staff={staff} key={staff.node.id} />
              ))}
            </div>
          </section>
        ) : (
          ""
        )}
      </article>
    </main>
  );
}

export default page;
