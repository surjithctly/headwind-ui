import React, { useState, useRef, useEffect } from "react";
import Signin from "./forms/signin";
import { Resizable } from "re-resizable";
import ReactDOMServer from "react-dom/server";
import IframeResizer from "iframe-resizer-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import beautify from "js-beautify/js/src/html";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import markup from "react-syntax-highlighter/dist/cjs/languages/prism/markup";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

SyntaxHighlighter.registerLanguage("markup", markup);
export default function components() {
  const ref = useRef(null);
  const [toggle, setToggle] = useState("preview");

  const [loaded, setloaded] = useState(false);
  const [theme, setTheme] = useState("");

  const markup = ReactDOMServer.renderToStaticMarkup(<Signin />);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setToggle("cc");
    setToggle(toggle);
  };

  useEffect(() => {
    setTheme((theme) => (localStorage.theme ? localStorage.theme : "light"));
    localStorage.theme = theme;
    if (localStorage.theme === "dark" || theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const prettymark = beautify(markup, {});
  //console.log(prettymark);

  const adjustheight = () => {
    ref.current.resize();
  };

  const copiedtoClipboard = () => {
    toast("🦄 Copied to Clipboard", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const iframeLoaded = () => {
    console.log("iframe loaded");
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
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <button
        onClick={handleClick}
        className="absolute top-1.5 right-1.5 z-10 text-gray-500"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>

      <div className="mx-auto my-5 border rounded max-w-screen-2xl">
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 dark:bg-gray-800 sm:py-4 sm:px-6 sm:items-baseline">
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
                className={`inline-block px-3 py-2 font-medium leading-none rounded-lg focus:outline-none ${
                  toggle == "preview" && "text-indigo-700 bg-indigo-50"
                }`}
              >
                Preview
              </button>
              <button
                type="button"
                onClick={() => setToggle("code")}
                className={`inline-block px-3 py-2 ml-2 font-medium leading-none text-gray-500 rounded-lg focus:outline-none hover:text-indigo-600 focus:text-indigo-600 ${
                  toggle == "code" && "text-indigo-700 bg-indigo-50"
                }`}
              >
                Code
              </button>
            </div>
            <div className="hidden sm:flex sm:items-center">
              <div className="self-stretch pl-4 pr-3">
                <div className="h-full border-l border-gray-200"></div>
              </div>
              <CopyToClipboard text={prettymark} onCopy={copiedtoClipboard}>
                <button
                  type="button"
                  className="flex items-center ml-3 text-gray-400 focus:outline-none hover:text-gray-500 focus:text-indigo-400"
                >
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                  {"  "}
                  Copy
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
        {toggle == "preview" && (
          <div className="relative bg-gray-200 sm:pr-3 ">
            <Resizable
              handleClasses={{
                right:
                  "sr-only z-10 sm:not-sr-only border-l border-r justify-center sm:bg-gray-100 bg-opacity-50  sm:flex sm:items-center",
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

              <IframeResizer
                forwardRef={ref}
                heightCalculationMethod="bodyOffset"
                checkOrigin={false}
                onInit={iframeLoaded}
                resizeFrom="child"
                src="/components/forms/signin"
                style={{
                  width: "1px",
                  minWidth: "100%",
                  minHeight: "1px",
                  zIndex: "1",
                  position: "relative",
                }}
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
