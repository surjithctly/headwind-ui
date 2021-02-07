import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Resizable } from "re-resizable";
import ReactDOMServer from "react-dom/server";
import IframeResizer from "iframe-resizer-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import beautify from "js-beautify/js/src/html";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import markup from "react-syntax-highlighter/dist/cjs/languages/prism/markup";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
//import { ToastContainer, toast } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

//import Signin from "../pages/components/forms/signin";

SyntaxHighlighter.registerLanguage("markup", markup);
export default function Preview(props) {
  const component = props.page;
  const componentPath = props.path;
  const componentTitle = props.title;
  const playlink = props.play;
  const ref = useRef(null);
  const [toggle, setToggle] = useState("preview");

  const [copied, setcopied] = useState(false);
  const [theme, setTheme] = useState("");

  const markup = ReactDOMServer.renderToStaticMarkup(component);

  //   const handleClick = () => {
  //     setTheme(theme === "dark" ? "light" : "dark");
  //     setToggle("cc");
  //     setToggle(toggle);
  //   };

  // useEffect(() => {
  //   setTheme((theme) => (localStorage.theme ? localStorage.theme : "light"));
  //   localStorage.theme = theme;
  //   if (localStorage.theme === "dark" || theme === "dark") {
  //     document.documentElement.classList.add("dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //   }
  // }, [theme]);

  const prettymark = beautify(markup, { inline: [] });
  //console.log(prettymark);

  const adjustheight = () => {
    ref.current.resize();
  };

  const copiedtoClipboard = () => {
    setcopied(true);

    setTimeout(() => {
      setcopied(false);
    }, 1500);
    // toast("🦄 Copied to Clipboard", {
    //   position: "top-center",
    //   autoClose: 2000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
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
      {/* <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}

      {/* <button
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
      </button> */}

      <div className="mx-auto my-5 border rounded max-w-screen-2xl">
        <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 dark:bg-gray-800 sm:py-4 sm:px-6 sm:items-baseline">
          <div className="flex items-center flex-shrink min-w-0">
            <h3 className="flex-shrink min-w-0 text-base leading-snug truncate font-regular md:text-lg">
              <Link href="components/forms/signin">
                <a className="flex items-center">
                  <span className="mr-3">{componentTitle}</span>
                </a>
              </Link>
            </h3>
          </div>
          <div className="flex items-center flex-shrink-0 ml-4">
            <div className="flex items-center text-sm sm:hidden">
              <button
                type="button"
                onClick={() =>
                  setToggle(toggle === "code" ? "preview" : "code")
                }
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
              <a
                href={playlink}
                className="hidden opacity-75 hover:opacity-100 md:inline"
                target="_blank"
                title="Edit code on Tailwind Play"
              >
                <svg
                  width="102"
                  height="20"
                  viewBox="0 0 102 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M90.9166 5.25001H87.75C87.33 5.25001 86.9273 5.41682 86.6304 5.71375C86.3334 6.01069 86.1666 6.41341 86.1666 6.83334V14.75C86.1666 15.1699 86.3334 15.5727 86.6304 15.8696C86.9273 16.1665 87.33 16.3333 87.75 16.3333H95.6666C96.0866 16.3333 96.4893 16.1665 96.7862 15.8696C97.0831 15.5727 97.25 15.1699 97.25 14.75V11.5833M94.0833 3.66667H98.8333M98.8333 3.66667V8.41667M98.8333 3.66667L90.9166 11.5833"
                    stroke="#595959"
                    strokeWidth="1.58333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5 3.00076C9.16672 3.00076 7.08313 4.66768 6.25 8.00076C7.50046 6.3346 8.95805 5.70865 10.6251 6.12595C11.5762 6.36354 12.2555 7.05346 13.0087 7.81648C14.2333 9.06077 15.652 10.5008 18.7508 10.5008C22.0833 10.5008 24.1669 8.83384 25 5.50076C23.7503 7.16768 22.2919 7.79287 20.6249 7.37557C19.6745 7.13798 18.9952 6.44807 18.2421 5.68504C17.0167 4.44076 15.598 3 12.5 3V3.00076ZM6.25 10.5008C2.91672 10.5008 0.83313 12.1677 0 15.5008C1.2497 13.8338 2.70805 13.2087 4.37508 13.6252C5.32625 13.8635 6.00554 14.5527 6.75871 15.3165C7.98328 16.5608 9.40204 18 12.5008 18C15.8333 18 17.9169 16.3338 18.75 13.0008C17.5003 14.6669 16.0419 15.2921 14.3749 14.8756C13.4245 14.638 12.7452 13.9481 11.992 13.185C10.766 11.9408 9.34797 10.5008 6.25 10.5008V10.5008Z"
                    fill="#16BDCA"
                  />
                  <path
                    d="M37.362 4.859H33V16.558H35.306V12.714H37.362C39.618 12.714 41.356 10.976 41.356 8.786C41.356 6.597 39.618 4.859 37.362 4.859V4.859ZM37.362 10.558H35.306V7.015H37.362C38.348 7.015 39.067 7.767 39.067 8.786C39.067 9.789 38.348 10.558 37.362 10.558ZM46.835 14.352V4.859H44.529V16.558H51.298V14.352H46.835ZM62.126 16.558H64.633L60.522 4.858H57.664L53.569 16.558H56.06L56.761 14.452H61.424L62.126 16.558V16.558ZM57.497 12.296L59.101 7.516L60.706 12.296H57.497ZM75.181 4.859H72.574L70.034 9.739L67.493 4.859H64.886L68.881 11.995V16.558H71.17V11.995L75.181 4.86V4.859Z"
                    fill="#16BDCA"
                  />
                </svg>
              </a>
              <div className="self-stretch hidden pl-4 pr-4 md:inline">
                <div className="h-full border-l border-gray-200"></div>
              </div>
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
                  {copied ? "Copied" : "Copy"}
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
                  "hidden sr-only z-10 sm:not-sr-only border-l border-r justify-center sm:bg-gray-100 bg-opacity-50  sm:flex sm:items-center",
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
                src={componentPath}
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
