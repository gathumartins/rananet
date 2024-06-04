import React from "react";
import Featured2 from "./Featured2";

function HomeNews({ resources }: any) {
  return (
    <article className="py-[40px] bg-clarity text-resilience">
      <section className="container">
        <h1 className="text-[40px] text-center font-normal mb-[20px]">
          Featured News and Resources
        </h1>
        <Featured2 resources={resources} />
      </section>
    </article>
  );
}

export default HomeNews;
