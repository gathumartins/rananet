"use client";
import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { Modal } from "react-bootstrap";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

function Staff({ staff }: any) {
  const pathname = usePathname();
  const [modalShow, setModalShow] = useState(false);
  const searchParams = useSearchParams();
  const markup = { __html: staff.node.content };
  const staffSlug = searchParams.get("name");
  useEffect(() => {
    if (staffSlug) {
      history.replaceState(null, "", `${pathname}?name=${staffSlug}`);
      setModalShow(true);
    }
  }, [staffSlug]);
  const handleOpen = (staffId: any) => {
    history.replaceState(null, "", `${pathname}?name=${staffId}`);
    setModalShow(true);
  };

  const handleClose = () => {
    history.replaceState(null, "", `${pathname}`);
    setModalShow(false);
  };
  // console.log(staffSlug);
  return (
    <div className="mx-auto cursor-pointer [&_img]:hover:scale-90 [&_h3]:hover:text-energy [&_h4]:hover:text-energy">
      <figure
        className="p-[20px] w-[230px] flex flex-col"
        onClick={() => handleOpen(staff.node.slug)}
      >
        <Image
          src={staff.node.featuredImage.node.sourceUrl}
          width="180"
          height="180"
          alt={`RANA ${staff.node.title} team headshot`}
          className="rounded-full mx-auto transition-all ease-in"
        />
        <figcaption className="text-center">
          <h3 className="font-normal tracking-tight text-xl text-resilience mb-[5px] mt-[15px]">
            {staff.node.title}
          </h3>
          <h4 className="font-normal text-sm text-resilience tracking-tight mt-0">
            {staff.node.team.designation}
          </h4>
        </figcaption>
      </figure>
      <Modal centered show={modalShow} onHide={handleClose} size="xl">
        <Modal.Body className="p-[50px] max-lg:px-[20px] relative">
          <div
            title="Show Staff Popup"
            role="button"
            className="closebtn absolute cursor-pointer w-[40px] h-[40px] p-[10px] flex justify-center place-items-center right-[40px] top-[40px]"
            onClick={handleClose}
          >
            <button
              title="Staff close button"
              className="text-resilience hover:text-energy"
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
          <header className="flex justify-start flex-row max-md:flex-col max-md:text-center gap-5 mb-[20px]">
            <Image
              src={staff.node.featuredImage.node.sourceUrl}
              width="180"
              height="180"
              alt={`RANA ${staff.node.title} team headshot`}
              className="rounded-full max-md:mx-auto"
            />
            <div className="">
              <h3 className="font-normal tracking-tight text-4xl text-resilience mb-[5px] mt-0">
                {staff.node.title}
              </h3>
              <h4 className="font-normal text-lg text-resilience tracking-tight mt-0">
                {staff.node.team.designation}
              </h4>
              <ul className="flex justify-start max-md:justify-center gap-4 mt-4 !pl-[0px]">
                <li>
                  {staff?.node?.team?.twitterx && (
                    <Link
                      href={staff?.node?.team?.twitterx}
                      target="_blank"
                      className="w-[40px] h-[40px] border-1 border-solid border-resilience text-resilience hover:border-energy hover:text-energy rounded-full flex justify-center place-items-center p-[5px]"
                    >
                      <FaXTwitter className="w-5 h-5" />
                    </Link>
                  )}
                </li>
                <li>
                  {staff?.node?.team?.linkedin && (
                    <Link
                      href={staff?.node?.team?.linkedin}
                      target="_blank"
                      className="w-[40px] h-[40px] border-1 border-solid border-resilience text-resilience hover:border-energy hover:text-energy rounded-full flex justify-center place-items-center p-[5px]"
                    >
                      <FaLinkedinIn className="w-5 h-5" />
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </header>
          <div
            className="text-left font-normal tracking-tight text-base mb-[15px] text-resilience"
            dangerouslySetInnerHTML={markup}
          ></div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Staff;
