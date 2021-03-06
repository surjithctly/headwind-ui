import Link from "next/link";
import React from "react";

export default function Navbar(props) {
  const staticNav = props.staticNav;
  return (
    <>
      <div
        className={`${
          staticNav ? "" : "fixed"
        } top-0 w-full px-5 md:px-10 2xl:px-16 bg-white border-b`}>
        <nav className="flex items-center justify-center py-4">
          <div className=" sm:mr-auto">
            <Link href="/">
              <a>
                <img
                  src="/img/w3t-logo.svg"
                  width="90"
                  height="36"
                  alt="Web3Templates"
                />
              </a>
            </Link>
          </div>

          <div className="hidden space-x-10 sm:block">
            <Link href="/">
              <a
                className="text-gray-300 cursor-not-allowed "
                title="coming soon">
                Templates
              </a>
            </Link>
            <Link href="/components">
              <a className="text-gray-500 ">Components</a>
            </Link>{" "}
            {/* <Link href="/">
              <a
                className="text-gray-300 cursor-not-allowed"
                title="coming soon"
              >
                Documentation
              </a>
            </Link> */}
          </div>
        </nav>
      </div>
    </>
  );
}
