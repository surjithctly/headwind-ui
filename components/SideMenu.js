import React, { useState } from "react";

export default function SideMenu() {
  const [active, setactive] = useState("ui");

  const menuItems = [
    {
      name: "UI Elements",
      slug: "ui",
      path: "/",
      icon: `<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </svg>`,
      children: [
        {
          name: "Cards",
          path: "/cards",
        },
        {
          name: "Data",
          path: "/data",
        },
        {
          name: "Forms",
          path: "/forms",
        },
        {
          name: "Navigation",
          path: "/navigation",
        },
      ],
    },
    {
      name: "Web Elements",
      path: "/",
      slug: "web",
      icon: `<svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>`,
      children: [
        {
          name: "Header",
          path: "/",
        },
        {
          name: "Features",
          path: "/",
        },
        {
          name: "Contact",
          path: "/",
        },
        {
          name: "Footer",
          path: "/",
        },
      ],
    },
  ];

  return (
    <aside className="sticky w-full p-5 my-10 bg-gray-100 rounded-lg top-10">
      <nav>
        {menuItems.map((menuitem, index) => {
          return (
            <div className="mb-5" key={index}>
              <a
                href="#"
                className={`flex items-center p-2 text-gray-500 transition-colors rounded-md ${
                  active === menuitem.slug && "bg-white"
                }`}
                role="button"
                onClick={() => setactive(menuitem.slug)}
                aria-haspopup="true">
                <span
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{ __html: menuitem.icon }}></span>
                <span className="ml-2 text-sm"> {menuitem.name} </span>
                <span className="ml-auto" aria-hidden="true">
                  <svg
                    className={`w-4 h-4 transition-transform transform ${
                      active === menuitem.slug && "rotate-180"
                    }`}
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

              {menuitem.children && active === menuitem.slug && (
                <div role="menu" className="mt-2 space-y-2 px-7" aria-label="">
                  {menuitem.children.map((childitem, index) => {
                    return (
                      <a
                        key={index}
                        href="#"
                        role="menuitem"
                        className="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:text-gray-400 dark:hover:text-light hover:text-gray-700">
                        {childitem.name}
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
