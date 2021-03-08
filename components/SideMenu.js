import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { menuItems } from "utils/menulist";

export default function SideMenu(props) {
  return (
    <aside className="sticky w-full p-5 mt-10 bg-gray-100 rounded-lg top-10">
      <nav>
        {menuItems.map((menuitem, index) => {
          return (
            <MenuItem
              active={
                props.active === menuitem.slug || props.active === "all"
                  ? true
                  : false
              }
              name={menuitem.name}
              icon={menuitem.icon}
              path={menuitem.path}
              child={menuitem.children ? true : false}
              key={index}>
              {menuitem.children &&
                menuitem.children.map((children, ch_index) => {
                  return (
                    <MenuItemChild
                      current={props.current === children.slug ? true : false}
                      name={children.name}
                      path={children.path}
                      key={ch_index}
                    />
                  );
                })}
            </MenuItem>
          );
        })}
      </nav>
    </aside>
  );
}

function MenuItem(props) {
  const [open, setOpen] = useState(props.active);

  return (
    <div className="mb-5">
      {props.child && (
        <a
          href="#"
          className={`flex items-center p-2 text-gray-500 transition-colors rounded-md  ${
            open && "bg-white"
          }`}
          role="button"
          onClick={() => setOpen(!open)}
          aria-haspopup="true">
          <span
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: props.icon }}></span>
          <span className="ml-2 text-sm"> {props.name} </span>

          <span className="ml-auto" aria-hidden="true">
            <svg
              className={`w-4 h-4 transition-transform transform    ${
                open && "rotate-180"
              }      }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </a>
      )}

      {!props.child && (
        <Link href={props.path}>
          <a
            href="#"
            className={`flex items-center p-2 text-gray-500 transition-colors rounded-md  ${
              open && "bg-white"
            }`}
            role="button"
            aria-haspopup="true">
            <span
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: props.icon }}></span>
            <span className="ml-2 text-sm"> {props.name} </span>
          </a>
        </Link>
      )}
      {props.children && open && (
        <div role="menu" className="mt-2 space-y-2 px-7" aria-label="">
          {props.children}
        </div>
      )}
    </div>
  );
}

function MenuItemChild(props) {
  const [active, setActive] = useState(props.current);
  return (
    <Link href={props.path}>
      <a
        role="menuitem"
        className={`block p-2 text-sm  transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700 ${
          active ? "text-gray-700" : "text-gray-400"
        }`}>
        {props.name}
      </a>
    </Link>
  );
}
