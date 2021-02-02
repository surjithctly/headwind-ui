import React from "react";

export default function table() {
  return (
    <>
      <div className="flex items-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="container">
          <div className="max-w-2xl mx-auto my-10 border rounded shadow-sm">
            <table className="w-full bg-white rounded">
              <thead className="border-b bg-gray-50">
                <tr className="">
                  <th className="px-3 py-2 text-center">
                    <input type="checkbox" name="select_all" id="select_all" />
                  </th>
                  <th className="px-3 py-2 text-sm font-normal text-left text-gray-500 uppercase">
                    Order ID
                  </th>
                  <th className="px-3 py-2 text-sm font-normal text-left text-gray-500 uppercase">
                    Date
                  </th>
                  <th className="px-3 py-2 text-sm font-normal text-left text-gray-500 uppercase">
                    Customer
                  </th>
                  <th className="px-3 py-2 text-sm font-normal text-left text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-3 py-2 text-sm font-normal text-left text-gray-500 uppercase">
                    Amount
                  </th>
                  <th className="px-3 py-2 text-sm font-normal text-left text-gray-500 uppercase"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-20 px-3 py-4 text-center">
                    <input type="checkbox" name="select" />
                  </td>
                  <td className="px-3 py-4">#102-325-2565</td>
                  <td className="px-3 py-4">May 14, 2021</td>
                  <td className="px-3 py-4">
                    <div className="flex">
                      <div className="w-16 h-16 overflow-hidden rounded-full">
                        <img
                          width="50"
                          height="50"
                          src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,50,150,150_AL_.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <div>Cristofer Dorwart</div>
                        <div>chris@ourcompany.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-4">January</td>
                  <td className="px-3 py-4">$100</td>
                  <td className="w-20 px-3 py-2 text-center">
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
                  </td>
                </tr>
                <tr>
                  <td>February</td>
                  <td>$80</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>Sum</td>
                  <td>$180</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
