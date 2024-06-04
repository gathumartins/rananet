"use client";
import { useFormState, useFormStatus } from "react-dom";
import { loginAction } from "./actions";
import React from "react";
import Image from "next/image";

function SubmitButton() {
  const status = useFormStatus();
  return (
    <button
      disabled={status.pending}
      className="bg-growth text-clarity hover:bg-energy rounded py-[8px] px-[16px]"
    >
      {status.pending ? "Loading..." : "Login"}
    </button>
  );
}
function page() {
  // @ts-ignore
  const [state, formAction] = useFormState(loginAction, {});
  return (
    <main className="w-full bg-[#223a3a] flex justify-center">
      <div className="w-[320px] py-[5%]">
        <center>
          <Image
            src="/images/whitelogo.svg"
            width={170}
            height={59}
            alt="RANA Logo"
            className="inline-block mb-[30px] w-[70%]"
          />
        </center>
        <form
          className="px-[24px] pt-[26px] pb-[34px] bg-[#172c2d] rounded-lg"
          action={formAction}
        >
          <fieldset>
            <label
              htmlFor="usernameEmail"
              className="mb-[3px] text-sm text-clarity font-rsans"
            >
              Username or Email
            </label>
            <br />
            <input
              type="name"
              name="usernameEmail"
              title="Username or Email"
              className="w-full leading-8 h-[40px] rounded mb-[16px] focus:outline focus-visible:outline-energy border-none px-[12px] "
            />
          </fieldset>

          <fieldset>
            <label
              htmlFor="password"
              className="mb-[3px] text-sm text-clarity font-rsans"
            >
              Password
            </label>
            <br />
            <input
              type="password"
              name="password"
              title="Password"
              className="w-full leading-8 h-[40px] rounded mb-[16px] focus:ring-none focus:shadow-none ring-0 focus-visible:outline-none focus-visible:ring-none border-clarity px-[12px] focus:border-energy"
            />
          </fieldset>

          <div className="flex justify-end">
            <SubmitButton />
          </div>
          {state.error && (
            <p
              dangerouslySetInnerHTML={{ __html: state.error }}
              className="text-clarity"
            ></p>
          )}
        </form>
      </div>
    </main>
  );
}

export default page;
