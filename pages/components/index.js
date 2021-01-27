import React, { useState, useRef, useEffect } from "react";
import SigninOne from "./forms/SigninOne";
import { Resizable } from "re-resizable";
import ReactDOMServer from "react-dom/server";
import IframeResizer from "iframe-resizer-react";
// import beautify from "js-beautify/js/src/html";
import pretty from "pretty";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import markup from "react-syntax-highlighter/dist/cjs/languages/prism/markup";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

SyntaxHighlighter.registerLanguage("markup", markup);
export default function components() {
  const ref = useRef(null);
  const [toggle, setToggle] = useState("preview");

  const [loaded, setloaded] = useState(false);
  console.log("load " + loaded);
  useEffect(() => {
    setloaded(true);
    console.log("load " + loaded);
  });

  const markup = ReactDOMServer.renderToStaticMarkup(<SigninOne />);
  // const prettymark = beautify(markup, {
  //   indent_size: 2,
  //   space_in_empty_paren: true,
  //   type: ["html"],
  // });

  const prettymark = pretty(markup);

  const adjustheight = () => {
    ref.current.resize();
  };

  const RightHandle = () => (
    <>
      <svg
        className="w-4 h-4 text-gray-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5h2v14H8zM14 5h2v14h-2z"></path>
      </svg>
    </>
  );

  return (
    <>
      I'm a compoennt page
      <div className="mx-auto my-5 border rounded max-w-screen-2xl">
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 sm:py-4 sm:px-6 sm:items-baseline">
          <div className="flex items-center flex-shrink min-w-0">
            <h3 className="flex-shrink min-w-0 text-base leading-snug truncate font-regular md:text-lg">
              <a href="#">Simple Sign In Page</a>
            </h3>
          </div>
          <div className="flex items-center flex-shrink-0 ml-4">
            <div className="flex items-center text-sm sm:hidden">
              <button
                type="button"
                className="inline-block px-3 py-3 font-medium leading-none text-gray-400 rounded-lg focus:outline-none hover:text-gray-600 focus:text-gray-600"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="items-center hidden text-sm sm:flex md:text-base">
              <button
                type="button"
                onClick={() => setToggle("preview")}
                className="inline-block px-3 py-2 font-medium leading-none text-indigo-700 rounded-lg focus:outline-none bg-indigo-50"
              >
                Preview
              </button>
              <button
                type="button"
                onClick={() => setToggle("code")}
                className="inline-block px-3 py-2 ml-2 font-medium leading-none text-gray-500 rounded-lg focus:outline-none hover:text-indigo-600 focus:text-indigo-600"
              >
                Code
              </button>
            </div>
            <div className="hidden sm:flex sm:items-center">
              <div className="self-stretch pl-4 pr-3">
                <div className="h-full border-l border-gray-200"></div>
              </div>
              <button
                type="button"
                className="ml-3 text-gray-400 hover:text-gray-500"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <title>Copy</title>
                  <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                  <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {toggle == "preview" && (
          <div className="relative bg-gray-200 sm:pr-3">
            {!loaded && (
              <div className="absolute z-0 w-5 h-5 text-black transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ">
                <svg
                  className="animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
            )}

            <Resizable
              handleClasses={{
                right:
                  "sr-only sm:not-sr-only border-l border-r justify-center sm:bg-gray-100 bg-opacity-50  sm:flex sm:items-center",
              }}
              handleStyles={{ right: { width: "16px", right: "-13px" } }}
              handleComponent={{
                right: <RightHandle />,
              }}
              maxWidth="100%"
              onResize={adjustheight}
              minWidth="336"
              enable={{
                top: false,
                right: true,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: false,
                bottomLeft: false,
                topLeft: false,
              }}
            >
              <IframeResizer
                forwardRef={ref}
                heightCalculationMethod="bodyOffset"
                checkOrigin={false}
                resizeFrom="child"
                src="/components/forms/signin"
                style={{ width: "1px", minWidth: "100%", minHeight: "1px" }}
              />
            </Resizable>
          </div>
        )}
        {toggle == "code" && (
          <div className="w-full overflow-auto">
            <SyntaxHighlighter
              language="markup"
              style={dracula}
              showLineNumbers
            >
              {prettymark}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </>
  );
}
