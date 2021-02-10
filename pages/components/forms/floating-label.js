import React from "react";
import Head from "next/head";
import styles from "../../../styles/floatingLabel.module.css";

export default function floatingLabel() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com/" />
        <script
          async
          src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.1/iframeResizer.contentWindow.min.js"
          integrity="sha512-qw2bX9KUhi7HLuUloyRsvxRlWJvj0u0JWVegc5tf7qsw47T0pwXZIk1Kyc0utTH3NlrpHtLa4HYTVUyHBr9Ufg=="
          crossOrigin="anonymous"
        ></script>
      </Head>

      <div className="flex items-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="max-w-lg mx-auto my-10">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">
                Sign in
              </h1>

              <p className="text-gray-500 dark:text-gray-400">
                Sign in to access your account
              </p>
            </div>

            <div className="m-7">
              <div className="relative p-8 bg-white shadow-sm sm:rounded-xl">
                <form className="w-full">
                  <div className={`relative mb-5 ${styles["floating-input"]}`}>
                    <input
                      type="email"
                      id="email"
                      className="w-full h-16 p-3 border border-gray-200 rounded-md focus:outline-none focus:border-gray-500 focus:shadow-sm"
                      placeholder="name@example.com"
                      autoComplete="off"
                    />
                    <label
                      htmlFor="email"
                      className="absolute top-0 left-0 h-full px-3 py-5 transition-all duration-100 ease-in-out origin-left transform pointer-events-none "
                    >
                      Email address
                    </label>
                  </div>
                  <div className={`relative mb-5 ${styles["floating-input"]}`}>
                    <input
                      type="password"
                      id="password"
                      className="w-full h-16 p-3 border border-gray-200 rounded-md focus:outline-none focus:border-gray-500 focus:shadow-sm"
                      placeholder="password"
                      autoComplete="off"
                    />
                    <label
                      htmlFor="password"
                      className="absolute top-0 left-0 h-full px-3 py-5 transition-all duration-100 ease-in-out origin-left transform pointer-events-none "
                    >
                      Password
                    </label>
                  </div>
                  <button className="w-full p-3 text-white bg-indigo-600 rounded-md">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
