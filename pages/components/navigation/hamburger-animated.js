import React, { useState } from "react";
import Head from "next/head";

export default function HamburgerAnimated() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com/" />
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.1/iframeResizer.contentWindow.min.js"
          integrity="sha512-qw2bX9KUhi7HLuUloyRsvxRlWJvj0u0JWVegc5tf7qsw47T0pwXZIk1Kyc0utTH3NlrpHtLa4HYTVUyHBr9Ufg=="
          crossOrigin="anonymous"></script>
      </Head>

      <div className="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:py-12">
        <div className="relative py-3 mx-auto sm:max-w-xl">
          <nav>
            <button
              className="relative w-10 h-10 text-gray-500 bg-white rounded-sm focus:outline-none"
              onClick={() => setOpen(!open)}>
              <span className="sr-only">Open main menu</span>
              <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                    open ? "rotate-45" : "-translate-y-1.5"
                  }`}></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
                    open && "opacity-0"
                  }`}></span>
                <span
                  aria-hidden="true"
                  className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                    open ? "-rotate-45" : "translate-y-1.5"
                  }`}></span>
              </div>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}

export const html = `<div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
<div class="relative py-3 sm:max-w-xl mx-auto">
    <nav x-data="{ open: false }">
        <button class="text-gray-500 w-10 h-10 relative focus:outline-none bg-white" @click="open = !open">
            <span class="sr-only">Open main menu</span>
            <div class="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'rotate-45': open,' -translate-y-1.5': !open }"></span>
                <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'opacity-0': open } "></span>
                <span aria-hidden="true" class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out" :class="{'-rotate-45': open, ' translate-y-1.5': !open}"></span>
            </div>
        </button>
    </nav>
</div>
</div>

<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js" defer></script>
`;
export const react = `import React, { useState } from "react";

export default function HamburgerAnimated() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col justify-center min-h-screen py-6 bg-gray-100 sm:py-12">
        <div className="relative py-3 mx-auto sm:max-w-xl">
          <nav>
            <button
              className="relative w-10 h-10 text-gray-500 bg-white rounded-sm focus:outline-none"
              onClick={() => setOpen(!open)}>
              <span className="sr-only">Open main menu</span>
              <div className="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  aria-hidden="true"
                  className={\`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out \${
                    open ? "rotate-45" : "-translate-y-1.5"
                  }\`}></span>
                <span
                  aria-hidden="true"
                  className={\`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out \${
                    open && "opacity-0"
                  }\`}></span>
                <span
                  aria-hidden="true"
                  className={\`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out \${
                    open ? "-rotate-45" : "translate-y-1.5"
                  }\`}></span>
              </div>
            </button>
          </nav>
        </div>
      </div>
    </>
  );
}
`;
