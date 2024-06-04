import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import SocialShare from "../../../../components/SocialShare";
import Search from "../../../../components/Search";

type Props = {
  params: { resourceId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const pageType = "post";
  const postSlug = params.resourceId;
  const seo = await fetch(
    `${process.env.BASE_URL}/api/postsSeo?type=${pageType}&slug=${postSlug}`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());
  const data = seo.post.post.seo;

  return {
    title: data.title,
    description: data.metaDesc,
    alternates: {
      canonical: data.opengraphUrl,
    },
    openGraph: {
      images: [data.opengraphImage.sourceUrl],
    },
  };
}
async function page({ params }: any) {
  const slug = params.resourceId;
  const query = `
query NewQuery($slug:ID!) {
  allNews:posts {
    edges {
      node {
        id
        slug
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }

aPiece:post(
    id: $slug
    idType: SLUG
  ) {
    id
    title
    slug
    uri
    content
    tags {
      edges {
        node {
          id
          name
          tagId
        }
      }
    }
    featuredImage {
      node {
        sourceUrl
      }
    }
    news_Resources {
      dateauthored
      author {
        id
        firstName
        lastName
        name
        slug
      }
    }
  }
  }`;
  const variables = {
    slug,
  };
  const res = await fetch(`${process.env.WORDPRESS_API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 },
    body: JSON.stringify({ query, variables }),
  });

  const data = await res.json();
  // my variables
  const aNews = data.data.aPiece;
  const newsID = aNews.id;
  const tags = aNews?.tags?.edges;
  const longNews = data.data.allNews.edges;
  const index = longNews.findIndex(
    (sNew: { node: { id: any } }) => sNew.node.id === newsID
  );
  let firstPart = longNews.slice(0, index);
  let secondPart = longNews.slice(index + 1);
  let myListNews = [...firstPart, ...secondPart];
  let relatedNews = myListNews.slice(0, 4);
  let searchText: any = "";
  const filteredNews = relatedNews.filter((siNew: any) => {
    const newsTitle = siNew.node.title.toLowerCase();
    return newsTitle.includes(searchText.toLowerCase());
  });
  // console.log(aNews);

  return (
    <article className="py-[40px]">
      <section className="container">
        <Row>
          <Col xs={12} md={12} lg={7} xl={8} className="mb-[20px]">
            <Row>
              <Col xs={12} className="mb-[20px]">
                <header>
                  <h1 className="text-resilience tracking-tight font-normal text-3xl capitalize">
                    {aNews.title}
                  </h1>
                </header>
              </Col>
              <Col xs={12}>
                <main className="innerCont tracking-tight font-normal text-resilience headingsMargins [&>p]:text-base [&>p]:mt-[10px]">
                  <figure>
                    <Image
                      src={aNews.featuredImage.node.sourceUrl}
                      width="1366"
                      height="768"
                      alt={`RANA ${aNews.title}`}
                      className="w-full rounded-xl"
                    />
                  </figure>
                  <nav className="share mb-[25px] mt-[15px] flex flex-row flex-wrap gap-5 justify-between">
                    <ul className="flex flex-row gap-5 tracking-tight font-normal text-lg text-neutral">
                      <li className="flex flex-row justify-start place-items-center">
                        {aNews.news_Resources.author && (
                          <Link
                            href={`/author/${aNews.news_Resources.author[0].slug}`}
                            className="hover:text-energy"
                          >
                            {aNews.news_Resources.author[0].name}
                          </Link>
                        )}
                      </li>
                      <li className="flex flex-row justify-start place-items-center">
                        <Image
                          src="/images/calendar.png"
                          width="24"
                          height="24"
                          alt="RANA news and Resources Calendar Image"
                          className="mr-[6px] !text-neutral"
                        />
                        {aNews.news_Resources.dateauthored}
                      </li>
                    </ul>
                    <SocialShare
                      share={`${process.env.BASE_URL}/news/${aNews.slug}`}
                      title={aNews.title}
                    />
                  </nav>
                  <div
                    className="universal"
                    dangerouslySetInnerHTML={{ __html: aNews.content }}
                  ></div>
                </main>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={12} lg={5} xl={4} className="mb-[20px]">
            <aside className="bg-slate-100 rounded-lg p-[30px] mb-[20px]">
              <h2 className="mt-0">Latest News</h2>
              <ul>
                {filteredNews?.map((relatedNew: any) => (
                  <li
                    className="pb-[8px] mt-[20px] [&_img]:object-contain [&_img]:self-start"
                    key={relatedNew.node.id}
                  >
                    <Link
                      href={`/news/${relatedNew.node.slug}`}
                      className="text-sm leading-[29px] tracking-tight font-medium [&_h3]:text-resilience/70 [&_h3]:hover:text-energy newsadd flex flex-col xl:flex-row gap-5"
                    >
                      <Image
                        width="184"
                        height="100"
                        src={relatedNew.node.featuredImage.node.sourceUrl}
                        alt="RANA resource and news images"
                        className="rounded-lg w-full"
                      />
                      <h3 className="mt-0 text-lg  lg:text-base tracking-tight">
                        {relatedNew.node.title}
                      </h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
            <div className="bg-slate-100 rounded-lg p-[30px]">
              <h2 className="mt-0">Tags</h2>
              <ul className="flex flex-row flex-wrap gap-x-3 gap-y-5 mt-[20px]">
                {tags.map((tag: any) => (
                  <li
                    key={tag.node.id}
                    className="text-xs text-resilience bg-clarity hover:bg-resilience hover:text-clarity rounded-lg text-center border border-resilience p-[10px] tracking-tight font-normal"
                  >
                    {tag.node.name}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </section>
    </article>
  );
}

export default page;
