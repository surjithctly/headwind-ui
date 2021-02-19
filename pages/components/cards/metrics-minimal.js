import React from "react";
import Head from "next/head";

export default function metricsOne() {
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

      <div className="flex items-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container max-w-6xl px-5 mx-auto my-28">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
              <div>
                <div className="text-sm text-gray-400 ">Total Sales</div>
                <div className="flex items-center pt-1">
                  <div className="text-xl font-medium text-indigo-400 ">
                    $9850.90
                  </div>
                </div>
              </div>

              <div className="text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 51 51">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M48.875 12.75L28.687 32.938 18.063 22.312 2.126 38.25"></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M36.125 12.75h12.75V25.5"></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
              <div>
                <div className="text-sm text-gray-400 ">Net Revenue</div>
                <div className="flex items-center pt-1">
                  <div className="text-xl font-medium text-indigo-400 ">
                    $7520.50
                  </div>
                </div>
              </div>
              <div className="text-gray-300">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 47 46">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M41.536 30.456a19.21 19.21 0 01-5.675 7.4 19.771 19.771 0 01-8.557 3.937c-3.138.608-6.38.455-9.444-.447a19.673 19.673 0 01-8.129-4.725 19.1 19.1 0 01-4.92-7.902 18.775 18.775 0 01-.564-9.237 18.98 18.98 0 013.923-8.419 19.538 19.538 0 017.497-5.639"></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M43.083 23c0-2.517-.506-5.01-1.49-7.335a19.142 19.142 0 00-4.246-6.218 19.617 19.617 0 00-6.353-4.155A19.953 19.953 0 0023.5 3.833V23h19.583z"></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
              <div>
                <div className="text-sm text-gray-400 ">Customers</div>
                <div className="flex items-center pt-1">
                  <div className="text-xl font-medium text-indigo-400">
                    1375
                  </div>
                </div>
              </div>
              <div className="text-gray-400">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 47 46">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M39.167 40.25v-3.833a7.585 7.585 0 00-2.295-5.422 7.92 7.92 0 00-5.539-2.245H15.667a7.92 7.92 0 00-5.54 2.245 7.585 7.585 0 00-2.294 5.422v3.833M23.5 21.083c4.326 0 7.833-3.432 7.833-7.666 0-4.235-3.507-7.667-7.833-7.667-4.326 0-7.833 3.432-7.833 7.667 0 4.234 3.507 7.666 7.833 7.666z"></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between p-5 bg-white rounded shadow-sm">
              <div>
                <div className="text-sm text-gray-400 ">MRR</div>
                <div className="flex items-center pt-1">
                  <div className="text-xl font-medium text-indigo-400 ">
                    $250.00
                  </div>
                </div>
              </div>
              <div className="text-gray-300">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 47 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23.5 38.3334V19.1667"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M35.25 38.3334V7.66675"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.75 38.3334V30.6667"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
