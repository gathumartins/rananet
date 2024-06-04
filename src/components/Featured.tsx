import React from "react";
import Link from "next/link";
import Image from "next/image";

function Featured({ resources }: any) {
  return (
    <div className="grid lg:grid-rows-3 lg:grid-cols-[55%] grid-cols-1 lg:grid-flow-col gap-x-8 gap-y-6 resources">
      {resources?.map((resource: any) => (
        <Link
          href={`news/${resource.node.slug}`}
          className="newsHome newsadd"
          key={resource.node.id}
        >
          <Image
            width="1366"
            height="768"
            src={resource.node.featuredImage.node.sourceUrl}
            alt={`RANA ${resource.node.title}`}
          />
          <div>
            <h2>{resource.node.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Featured;
