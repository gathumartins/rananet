"use client";
import React, { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";

function Paginate({ postsPerPage, allPosts }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const currentPosts = allPosts.slice((currentPage - 1) * 12, currentPage * 12);
  return (
    <ResponsivePagination
      current={currentPage}
      total={totalPages}
      onPageChange={setCurrentPage}
    />
  );
}

export default Paginate;
