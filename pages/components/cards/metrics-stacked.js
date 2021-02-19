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
          <div className="grid bg-white divide-y divide-gray-100 rounded shadow-sm sm:divide-x lg:divide-y-0 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-5 lg:px-8 ">
              <div className="text-base text-gray-400 ">Total Sales</div>
              <div className="flex items-center pt-1">
                <div className="text-2xl font-bold text-gray-900 ">
                  $9850.90
                </div>
                <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 15L12 9L6 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>1.8%</span>
                </span>
              </div>
            </div>
            <div className="p-5 lg:px-8 ">
              <div className="text-base text-gray-400 ">Net Revenue</div>
              <div className="flex items-center pt-1">
                <div className="text-2xl font-bold text-gray-900 ">
                  $7520.50
                </div>
                <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-red-600 bg-red-100 rounded-full">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>2.5%</span>
                </span>
              </div>
            </div>
            <div className="p-5 lg:px-8 ">
              <div className="text-base text-gray-400 ">Customers</div>
              <div className="flex items-center pt-1">
                <div className="text-2xl font-bold text-gray-900 ">1375</div>
                <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 15L12 9L6 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>5.2%</span>
                </span>
              </div>
            </div>
            <div className="p-5 lg:px-8 ">
              <div className="text-base text-gray-400 ">MRR</div>
              <div className="flex items-center pt-1">
                <div className="text-2xl font-bold text-gray-900 ">$250.00</div>
                <span className="flex items-center px-2 py-0.5 mx-2 text-sm text-green-600 bg-green-100 rounded-full">
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M18 15L12 9L6 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>2.2%</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
