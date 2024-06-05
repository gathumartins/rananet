import React from "react";
import { Row, Col } from "react-bootstrap";
import Resource2 from "../../../../components/Resource2";
import Paginate from "../../../../components/Paginate";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import next from "next";

async function page({ params }: any) {
  // const authorSlug = params.authorId;
  // const data = await fetch(
  //   `${process.env.BASE_URL}/api/author?slug=${authorSlug}`,
  //   {
  //     next: { revalidate: 60 },
  //   }
  // ).then((res) => res.json());
  // const author = data.author.user;
  // const newsData = await fetch(`${process.env.BASE_URL}/api/news`, {
  //   next: { revalidate: 60 },
  // }).then((res) => res.json());
  // let allNews = newsData.edges;
  // let authorId = author.id;
  // let news = allNews.filter(
  //   (newsItem: any) => newsItem.node.news_Resources.author[0].id === authorId
  // );
  return (
    <h1>Author Page</h1>
    // <main>
    //   <header
    //     className="topBann bg-[url('/images/authban.webp')] bg-black/20 backdrop-blur-sm"
    //     // style={{ backgroundImage: `url(${bgImage})` }}
    //   >
    //     <div className="container flex justify-start place-items-center">
    //       <h1 className="text-clarity tracking-tight font-normal text-5xl">
    //         {author.name}
    //       </h1>
    //     </div>
    //   </header>
    //   <article className="py-[40px]">
    //     <section className="container">
    //       <Row>
    //         <Col xs={12} className="flex flex-col md:flex-row gap-5 my-[20px]">
    //           <figure className="basis-1/4 mb-4 rounded-lg bg-clarity border-1 flex flex-col justify-center place-items-center">
    //             <img
    //               src={author.avatar.url}
    //               alt={`${author.firstName} profile image`}
    //               className="inline-block rounded-lg w-full"
    //             />
    //           </figure>
    //           <div className="basis-3/4">
    //             <p className="leading-8 mb-4 text-base text-neutral font-normal">
    //               {author.description}
    //             </p>
    //             {(author.authorsSocials.linkedin ||
    //               author.authorsSocials.twitterX) && (
    //               <div className="socials border-y-[1px] py-3 border-y-resilience flex flex-row justify-start gap-5">
    //                 {author.authorsSocials.linkedin && (
    //                   <Link
    //                     href={`${author.authorsSocials.linkedin}`}
    //                     className="h-8 w-8 rounded-full p-2 bg-neutral text-clarity hover:bg-energy"
    //                     target="_blank"
    //                   >
    //                     <FaLinkedinIn />
    //                   </Link>
    //                 )}
    //                 {author.authorsSocials.twitterX && (
    //                   <Link
    //                     href={`${author.authorsSocials.twitterX}`}
    //                     className="h-8 w-8 rounded-full p-2 bg-neutral text-clarity hover:bg-energy"
    //                     target="_blank"
    //                   >
    //                     <FaXTwitter />
    //                   </Link>
    //                 )}
    //               </div>
    //             )}
    //           </div>
    //         </Col>
    //         <Col xs={12}>
    //           <Row>
    //             <Col xs={12} className="mt-[20px]">
    //               <h2 className="text-resilience font-normal text-3xl tracking-tight">
    //                 Recent Posts
    //               </h2>
    //             </Col>
    //             <Col xs={12}>
    //               <Row>
    //                 {news?.map((piece: any) => (
    //                   <Resource2 key={piece.node.id} newspiece={piece} />
    //                 ))}
    //               </Row>
    //               <div className="flex justify-center">
    //                 {news.length > 9 && (
    //                   <Paginate allPosts={news} postsPerPage={9} />
    //                 )}
    //               </div>
    //             </Col>
    //           </Row>
    //         </Col>
    //       </Row>
    //     </section>
    //   </article>
    // </main>
  );
}

export default page;
