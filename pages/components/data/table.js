import React from "react";
import Head from "next/head";

export default function table() {
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

        <script></script>
      </Head>
      <div className="flex items-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="w-full px-5 mx-auto lg:container">
          <div className="max-w-screen-lg mx-auto">
            <div className="min-w-full my-10 overflow-x-auto border rounded-md shadow-sm">
              <table className="min-w-full bg-white rounded whitespace-nowrap">
                <thead className="border-b bg-gray-50">
                  <tr className="">
                    <th className="px-3 py-3 text-center ">
                      <div className="flex place-content-center">
                        <input
                          type="checkbox"
                          name="select_all"
                          id="select_all"
                          className="w-4 h-4 text-indigo-500 border border-gray-200 rounded focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        />
                      </div>
                    </th>
                    <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                      Order ID
                    </th>
                    <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                      Date
                    </th>
                    <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                      Customer
                    </th>
                    <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                      Status
                    </th>
                    <th className="px-3 py-3 text-xs font-normal text-right text-gray-500 uppercase align-middle">
                      Amount
                    </th>
                    <th className="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle"></th>
                  </tr>
                </thead>
                <tbody className="text-sm bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="w-20 px-3 py-4 text-center">
                      <input
                        type="checkbox"
                        name="select"
                        className="w-4 h-4 rounded opacity-50"
                      />
                    </td>
                    <td className="px-3 py-4 text-gray-600 ">#102-325-2565</td>
                    <td className="px-3 py-4 text-gray-500 ">May 07, 2021</td>
                    <td className="px-3 py-4">
                      <div className="flex items-center w-max">
                        <img
                          width="50"
                          height="50"
                          className="w-10 h-10 rounded-full"
                          src="https://images.unsplash.com/photo-1506085452766-c330853bea50?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3e378252a934e660f231666b51bd269a"
                          alt="avatar"
                        />

                        <div className="ml-4">
                          <div>Chase Maxwell</div>
                          <div className="text-sm text-gray-400">
                            chase@anothercompany.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      {" "}
                      <span className="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">
                        completed
                      </span>
                    </td>
                    <td className="px-3 py-4 text-right text-gray-500 ">
                      $125.00
                    </td>
                    <td className="w-20 px-3 py-2 text-center text-gray-500 ">
                      <div className="flex place-content-center">
                        <a href="#!">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="w-20 px-3 py-4 text-center">
                      <input
                        type="checkbox"
                        name="select"
                        className="w-4 h-4 rounded opacity-50"
                      />
                    </td>
                    <td className="px-3 py-4 text-gray-600">#102-325-2565</td>
                    <td className="px-3 py-4 text-gray-600">Oct 30, 2021</td>
                    <td className="px-3 py-4">
                      <div className="flex items-center w-max">
                        <img
                          width="50"
                          height="50"
                          className="w-10 h-10 rounded-full"
                          src="https://uifaces.co/our-content/donated/N5PLzyan.jpg"
                          alt="avatar"
                        />

                        <div className="ml-4">
                          <div>Cristofer Dorwart</div>
                          <div className="text-sm text-gray-400">
                            chris@ourcompany.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <span className="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">
                        completed
                      </span>
                    </td>
                    <td className="px-3 py-4 text-right text-gray-600">
                      $260.00
                    </td>
                    <td className="w-20 px-3 py-2 text-center text-gray-500">
                      <div className="flex place-content-center">
                        <a href="#!">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="w-20 px-3 py-4 text-center">
                      <input
                        type="checkbox"
                        name="select"
                        className="w-4 h-4 rounded opacity-50"
                      />
                    </td>
                    <td className="px-3 py-4 text-gray-600">#102-325-2565</td>
                    <td className="px-3 py-4 text-gray-600">Sep 16, 2021</td>
                    <td className="px-3 py-4">
                      <div className="flex items-center w-max">
                        <img
                          width="50"
                          height="50"
                          className="w-10 h-10 rounded-full"
                          src="https://images.unsplash.com/photo-1509868918748-a554ad25f858?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3159ec467959b2aada4b75d565c270aa"
                          alt="avatar"
                        />

                        <div className="ml-4">
                          <div>Zahraa Duncan</div>
                          <div className="text-sm text-gray-400">
                            zahraa@ourcompany.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <span className="px-4 py-1 text-sm text-yellow-500 rounded-full bg-yellow-50">
                        in-progress
                      </span>
                    </td>
                    <td className="px-3 py-4 text-right text-gray-600">
                      $75.00
                    </td>
                    <td className="w-20 px-3 py-2 text-center text-gray-500">
                      <div className="flex place-content-center">
                        <a href="#!">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="w-20 px-3 py-4 text-center">
                      <input
                        type="checkbox"
                        name="select"
                        className="w-4 h-4 rounded opacity-50"
                      />
                    </td>
                    <td className="px-3 py-4 text-gray-600">#102-325-2565</td>
                    <td className="px-3 py-4 text-gray-600">Aug 14, 2021</td>
                    <td className="px-3 py-4">
                      <div className="flex items-center w-max">
                        <img
                          width="50"
                          height="50"
                          className="w-10 h-10 rounded-full"
                          src="https://randomuser.me/api/portraits/men/10.jpg"
                          alt="avatar"
                        />

                        <div className="ml-4">
                          <div>Viktor Xiong</div>
                          <div className="text-sm text-gray-400">
                            vicktor@supercompany.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <span className="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">
                        completed
                      </span>
                    </td>
                    <td className="px-3 py-4 text-right text-gray-600">
                      $326.00
                    </td>
                    <td className="w-20 px-3 py-2 text-center text-gray-500">
                      <div className="flex place-content-center ">
                        <a href="#!">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="w-20 px-3 py-4 text-center">
                      <input
                        type="checkbox"
                        name="select"
                        className="w-4 h-4 rounded opacity-50"
                      />
                    </td>
                    <td className="px-3 py-4 text-gray-600">#102-325-2565</td>
                    <td className="px-3 py-4 text-gray-600">May 10, 2021</td>
                    <td className="px-3 py-4">
                      <div className="flex items-center w-max">
                        <img
                          width="50"
                          height="50"
                          className="w-10 h-10 rounded-full"
                          src="https://randomuser.me/api/portraits/men/18.jpg"
                          alt="avatar"
                        />

                        <div className="ml-4">
                          <div>Cristiano Summers</div>
                          <div className="text-sm text-gray-400">
                            me@ourbestcompany.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <span className="px-4 py-1 text-sm text-red-500 rounded-full bg-red-50">
                        cancelled
                      </span>
                    </td>
                    <td className="px-3 py-4 text-right text-gray-600">
                      $250.00
                    </td>
                    <td className="w-20 px-3 py-2 text-center text-gray-500">
                      <div className="flex place-content-center">
                        <a href="#!">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td className="w-20 px-3 py-4 text-center">
                      <input
                        type="checkbox"
                        name="select"
                        className="w-4 h-4 rounded opacity-50"
                      />
                    </td>
                    <td className="px-3 py-4 text-gray-600">#102-325-2565</td>
                    <td className="px-3 py-4 text-gray-600">Jun 28, 2021</td>
                    <td className="px-3 py-4">
                      <div className="flex items-center w-max">
                        <img
                          width="50"
                          height="50"
                          className="w-10 h-10 rounded-full"
                          src="https://randomuser.me/api/portraits/women/17.jpg"
                          alt="avatar"
                        />

                        <div className="ml-4">
                          <div>Kerrie Webster</div>
                          <div className="text-sm text-gray-400">
                            kerrie@ourcompany.com
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <span className="px-4 py-1 text-sm text-green-500 rounded-full bg-green-50">
                        completed
                      </span>
                    </td>
                    <td className="px-3 py-4 text-right text-gray-600">
                      $175.00
                    </td>
                    <td className="w-20 px-3 py-2 text-center text-gray-500">
                      <div className="flex place-content-center">
                        <a href="#!">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                            />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
