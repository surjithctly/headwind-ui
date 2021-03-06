import React from "react";
import Navbar from "components/Navbar";
import Subscribe from "components/Subscribe";
import Link from "next/link";
import Image from "next/image";
import SideMenu from "components/SideMenu";
import { menuItems } from "utils/menulist";

export default function index() {
  return (
    <>
      <Navbar staticNav="true" />

      <div className="px-5 md:px-10 2xl:px-16">
        <div className="grid gap-10 lg:grid-cols-fr">
          <div>
            <SideMenu active="all" />
          </div>
          <div>
            {menuItems.map((menuitem, index) => {
              return (
                <>
                  <div className="w-full mx-auto mt-10 mb-6">
                    <h1 className="mt-3 text-xl font-bold">{menuitem.name}</h1>
                  </div>
                  <div
                    key={index}
                    className="grid grid-cols-4 gap-10 mt-6 mb-16">
                    {menuitem.children &&
                      menuitem.children.map((children, subindex) => {
                        return (
                          <div key={subindex}>
                            <ThumbnailCard
                              name={children.name}
                              path={children.path}
                              thumbnail={children.thumbnail}
                              count={children.count}
                            />
                          </div>
                        );
                      })}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full px-5 mt-auto mb-10 ">
        <Subscribe type="components" />
      </div>
    </>
  );
}

function ThumbnailCard(props) {
  return (
    <Link href={props.path}>
      <a>
        <div className="flex flex-col">
          <div className="border border-gray-200 rounded-md">
            <Image
              src={
                props.thumbnail
                  ? props.thumbnail
                  : "/img/components/placeholder.png"
              }
              alt=""
              width={1902}
              height={965}
              className="w-full rounded-md"
              layout="responsive"
            />
          </div>

          <div>
            <h3 className="mt-3 font-bold text-gray-700 text-md">
              {props.name}
            </h3>
            <p className="text-sm text-gray-400">
              {props.count ? props.count : "0"} components
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
