import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import SocialShare from "../../../../../components/SocialShare";

type Props = {
  params: { careerId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const pageType = "career";
  const postSlug = params.careerId;
  const seo = await fetch(
    `${process.env.BASE_URL}/api/postsSeo?type=${pageType}&slug=${postSlug}`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());
  const data = seo.post.career.seo;
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
  const slug = params.careerId;
  const query = `
  query NewQuery($slug:ID!) {
  career(
    id: $slug
    idType: SLUG
  ) {
    careerId
    careers {
      closingDate
      applyLink {
        buttonText
        link
      }
    }
    content
    id
    slug
    title
    uri
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
  careers {
    edges {
      node {
        title
        slug
        id
      }
    }
  }
}
  `;
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
  const career = data.data;
  const careerID = career.career.id;
  const shareUrl = career.career.uri;
  const index = career.careers.edges.findIndex(
    (job: { node: { id: any } }) => job.node.id === careerID
  );
  let firstPart = career.careers.edges.slice(0, index);
  let secondPart = career.careers.edges.slice(index + 1);
  let myLongJobs = [...firstPart, ...secondPart];
  let otherJobs = myLongJobs.slice(0, 5);
  return (
    <article className="py-[40px]">
      <section className="container">
        <Row>
          <Col xs={12} md={7} lg={8} className="mb-[20px]">
            <header>
              <h1 className="text-resilience tracking-tight font-normal text-3xl capitalize">
                {career.career.title}
              </h1>
            </header>
          </Col>
          <Col xs={12} md={7} lg={8} className="mb-[20px]">
            <main className="innerCont tracking-tight font-normal text-resilience headingsMargins [&>p]:text-base">
              <figure>
                <Image
                  src={career.career.featuredImage.node.sourceUrl}
                  width="1366"
                  height="768"
                  alt={`RANA ${career.career.title} job image`}
                  className="w-full"
                />
              </figure>
              <nav className="share mt-[20px] flex flex-row flex-wrap gap-5 justify-end">
                <SocialShare
                  share={`${process.env.BASE_URL}/joinourteam/${shareUrl}`}
                  title={career.career.title}
                />
              </nav>
              <div
                className="universal"
                dangerouslySetInnerHTML={{ __html: career.career.content }}
              ></div>
              {career.career.careers.applyLink.link && (
                <Link
                  href={career.career.careers.applyLink.link}
                  target="_blank"
                  className="mt-[40px] inline-block bg-resilience text-clarity hover:bg-energy rounded-lg text-center py-[13px] px-[40px]"
                >
                  {career.career.careers.applyLink.buttonText}
                </Link>
              )}
            </main>
          </Col>
          <Col xs={12} md={5} lg={4} className="mb-[20px]">
            <aside className="bg-slate-100 rounded-lg p-[30px] min-h-[300px]">
              <h2 className="mt-0">Other Job Opportunities</h2>
              <ul>
                {otherJobs?.map((job: any) => (
                  <li
                    className="border-solid border-b-[1px] border-resilience/20 pb-[8px] mb-[20px]"
                    key={job.node.id}
                  >
                    <Link
                      href={`/joinourteam/${job.node.slug}`}
                      className="text-sm leading-[29px] tracking-tight font-medium text-resilience/70 hover:text-energy underline"
                    >
                      {job.node.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          </Col>
        </Row>
      </section>
    </article>
  );
}

export default page;
