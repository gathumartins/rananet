import RelatedTags from "../../../../components/RelatedTags";
import React from "react";

function page() {
  return (
    <main>
      <header
        className="topBann bg-no-repeat object-cover bg-center"
        style={{
          backgroundImage: `url('https://ranafricastg.wpenginepowered.com/wp-content/uploads/2023/11/News.png')`,
        }}
      >
        <div className="container flex justify-start place-items-center">
          <h1 className="text-clarity tracking-tight font-normal text-5xl">
            {/* {data.page.title} */}
            News & Resources
          </h1>
        </div>
      </header>
      <section className="py-[40px]">
        <div className="container">
          <RelatedTags />
        </div>
      </section>
    </main>
  );
}

export default page;
