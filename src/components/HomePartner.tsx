"use client";
import ScrollCarousel from "scroll-carousel-react";
import Link from "next/link";
import Image from "next/image";

function HomePartner({ partners }: any) {
  return (
    <div className="container py-[25px] bg-clarity">
      <ScrollCarousel autoplay autoplaySpeed={1} speed={1}>
        {partners?.map((partner: any) => (
          partner.node.partners.website === null ? <div key={partner.node.id}
            className="w-[200px] h-[90px] relative inline-block">
             <Image
              className="grayscale hover:grayscale-0 object-fill"
              src={partner.node.featuredImage.node.sourceUrl}
              width="200"
              height="90"
              alt={`RANA Partner ${partner.node.title} Logo`}
              loading="lazy"
            />
          </div> :
          <Link
            href={partner.node.partners.website}
            target="_blank"
            key={partner.node.id}
            className="w-[200px] h-[90px] relative inline-block"
          >
            <Image
              className="grayscale hover:grayscale-0 object-fill"
              src={partner.node.featuredImage.node.sourceUrl}
              width="200"
              height="90"
              alt={`RANA Partner ${partner.node.title} Logo`}
              loading="lazy"
            />
          </Link>
        ))}
      </ScrollCarousel>
    </div>
  );
}

export default HomePartner;
