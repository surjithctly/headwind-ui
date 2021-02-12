import Link from "next/link";
import React from "react";

export default function Navbar(props) {
  const staticNav = props.staticNav;
  return (
    <>
      <div
        className={`${
          staticNav ? "" : "fixed"
        } top-0 w-full px-6 bg-white border-b`}
      >
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

          <div className="hidden sm:block">
            <Link href="/">
              <a
                className="mr-10 text-gray-300 cursor-not-allowed"
                title="coming soon"
              >
                Templates
              </a>
            </Link>
            <Link href="/components">
              <a className="mr-10 text-gray-500">Components</a>
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
