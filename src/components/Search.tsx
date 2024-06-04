"use client";
import { useState } from "react";
import Image from "next/image";

function Search({ searchText }: any) {
  const [search, setSearch] = useState(searchText);
  function handleSearchInput(e: any) {
    setSearch(e.target.value);
  }
  return (
    <div className="mb-[20px] bg-resilience py-[50px] px-[30px] rounded-lg flex place-items-center">
      <input
        type="text"
        name="search"
        id="serach"
        className=" flex-1 h-[46px] p-[15px] ring-1  focus:outline-growth border-none rounded-l-lg"
        placeholder="Search"
        value={search}
        onChange={handleSearchInput}
      />
      <button
        title="Search Form Button"
        name="search"
        disabled
        className="w-[58px] h-[46px] bg-energy hover:bg-growth p-[19px] flex justify-center place-items-center rounded-r-lg"
      >
        <Image
          src="/images/search.svg"
          width="20"
          height="20"
          alt="RANA news and resource page search button icon"
        />
      </button>
    </div>
  );
}

export default Search;
