import React from "react";
import Navbar from "components/Navbar";
import Subscribe from "components/Subscribe";
import Preview from "components/Preview";
import Signin, { react as signinReact } from "./forms/signin";
import FloatingLabel from "./forms/floating-label";
import Table from "./data/table";
import MetricsDefault from "./cards/metrics-default";
import MetricsStacked from "./cards/metrics-stacked";
import MetricsMinimal from "./cards/metrics-minimal";
import MetricsIcon from "./cards/metrics-icon";
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

      <div className="grid grid-cols-4 gap-4">
        <div>1</div>
        <div>9</div>
        <div>1</div>
        <div>9</div>
      </div>

      <div className="w-full px-5 mt-auto mb-10 ">
        <Subscribe type="components" />
      </div>
    </>
  );
}
