import React from "react";
import { hasPreviewProps } from "./hasPreviewProps";
import { redirect } from "next/navigation";
import NewsPost from "../../../components/NewsPost";
import EventPost from "../../../components/EventPost";
import CareerPost from "../../../components/CareerPost";

async function page(props: any) {
  const isPreview = hasPreviewProps(props);
  const id = isPreview ? props.searchParams.p : props.params.slug;
  const postType = props.searchParams.typeName;
  let data, others, related, draft;
  if (postType === "Post" || postType === "Event" || postType === "Career") {
    draft = await fetch(
      `${
        process.env.BASE_URL
      }/api/postPreviews?p=${id}&typeName=${postType.toLowerCase()}`,
      { next: { revalidate: 60 } }
    ).then((res) => res.json());
  }

  switch (postType) {
    case "Post":
      data = draft.draft.post;
      others = await fetch(`${process.env.BASE_URL}/api/resources`, {
        cache: "no-store",
      }).then((res) => res.json());
      related = others.allNews.edges.slice(0, 3);
      break;
    case "Event":
      data = draft.draft.event;
      others = await fetch(`${process.env.BASE_URL}/api/evnt`, {
        cache: "no-store",
      }).then((res) => res.json());
      related = others.allEvents.edges.slice(0, 3);
      break;
    case "Career":
      data = draft.draft.career;
      others = await fetch(`${process.env.BASE_URL}/api/join`, {
        cache: "no-store",
      }).then((res) => res.json());
      related = others.careers.edges.slice(0, 3);
      break;
    default:
      redirect("/");
  }
  return (
    <main>
      {props.searchParams.typeName === "Post" ? (
        <NewsPost aNews={data} relatedNews={related} />
      ) : props.searchParams.typeName === "Event" ? (
        <EventPost anEvent={data} relatedEvents={related} />
      ) : props.searchParams.typeName === "Career" ? (
        <CareerPost career={data} otherJobs={related} />
      ) : (
        redirect("/")
      )}
    </main>
  );
}
export default page;
