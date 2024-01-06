import React from "react";
import { Link } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

function Page404() {
  return (
    <>
      <main className="h-screen w-full flex flex-col justify-center items-center">
        <TbError404 className="w-64 h-64" />
        <div className="bg-base-300 px-5 text-md rounded rotate-12 absolute">
          Nyari apa sih ngabs???
        </div>
        <Link to="/" className="relative">
          <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full bg-secondary"></span>
          <span className="relative inline-block h-full w-full border-2 border-neutral bg-neutral px-3 py-1 text-base text-base-100 transition duration-100 hover:bg-gray-900 hover:text-yellow-500">
            Back Home
          </span>
        </Link>
      </main>
    </>
  );
}

export default Page404;
