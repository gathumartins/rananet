import React from "react";
import Link from "next/link";

function RelatedTags() {
  return (
    <header>
      <h2 className="py-[5px] leading-8 text-[36px] text-resilience font-medium">
        Related Tags
      </h2>
      <nav className="flex flex-row flex-wrap gap-[10px]">
        <Link
          href="/news/tags"
          className="py-[6px] px-[8px] border-[1px] rounded-lg border-resilience text-resilience bg-clarity hover:bg-resilience hover:text-clarity"
        >
          All
        </Link>
        <Link
          href="/news/tags/1"
          className="py-[6px] px-[8px] border-[1px] rounded-lg border-resilience text-resilience bg-clarity hover:bg-resilience hover:text-clarity"
        >
          One
        </Link>
      </nav>
    </header>
  );
}

export default RelatedTags;
