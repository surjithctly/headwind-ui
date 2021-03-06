import React from "react";
import Navbar from "components/Navbar";
import Subscribe from "components/Subscribe";

import SideMenu from "components/SideMenu";
import Link from "next/link";

export default function ListLayout(props) {
  return (
    <>
      <Navbar staticNav="true" />

      <div className="px-5 md:px-10 2xl:px-16">
        <div className="grid gap-10 lg:grid-cols-fr ">
          <div className="">
            <SideMenu active={props.active} current={props.current} />
          </div>
          <div className="min-w-0 ">
            <div className="w-full mx-auto my-10">
              <div className="flex items-center space-x-2 text-base text-gray-500">
                <Link href="/components/all">
                  <a className="hover:text-gray-700">Components</a>
                </Link>{" "}
                <span>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>{" "}
                <span>UI Components</span>
              </div>

              <h1 className="mt-3 text-3xl font-bold">{props.title}</h1>
            </div>
            {props.children}
          </div>
        </div>
      </div>

      <div className="w-full px-5 mt-auto mb-10 ">
        <Subscribe type="components" />
      </div>
    </>
  );
}
