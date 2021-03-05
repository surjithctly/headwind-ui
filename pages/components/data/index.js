import React from "react";
import Navbar from "components/Navbar";
import Subscribe from "components/Subscribe";
import Preview from "components/Preview";
import Table from "./table";

import { css, configs } from "components/code/global";
//import fs from "fs";

// export async function getStaticProps() {
//   fs.readFile("./forms/signin.js", "utf8", function (err, data) {
//     if (err) throw err;
//     console.log(data);
//   });

//   return "done";
// }

export default function index() {
  return (
    <>
      <Navbar staticNav="true" />

      {/* <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">1</div>
        <div className="col-span-9">9</div>
      </div> */}

      <div className="px-5">


        <Preview
          page={<Table />}
          css={css}
          config={configs}
          title="Responsive Table"
          path="/components/data/table"
          play="https://play.tailwindcss.com/CAmK0XxhLk"
        />

      <div className="w-full px-5 mt-auto mb-10 ">
        <Subscribe type="components" />
      </div>
    </>
  );
}
