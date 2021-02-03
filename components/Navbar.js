import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 w-full px-6 bg-white border-b">
        <nav className="flex items-center justify-center py-4">
          <div className=" sm:mr-auto">
            <img
              src="/img/headwind-logo.svg"
              width="200"
              height="32"
              alt="Headwind UI"
            />
          </div>

          <div className="hidden sm:block">
            <Link href="/components">
              <a className="mr-10 text-gray-500">Components</a>
            </Link>{" "}
            <Link href="/">
              <a
                className="text-gray-300 cursor-not-allowed"
                title="coming soon"
              >
                Documentation
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
