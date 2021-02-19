import React from "react";
import Navbar from "../../components/Navbar";
import Subscribe from "../../components/Subscribe";
import Preview from "../../components/Preview";
import Signin from "./forms/signin";
import FloatingLabel from "./forms/floating-label";
import Table from "./data/table";
import MetricsDefault from "./cards/metrics-default";
import MetricsStacked from "./cards/metrics-stacked";
import MetricsMinimal from "./cards/metrics-minimal";
import {
  html,
  react,
  css,
  configs,
} from "../../components/code/forms/signin-one";
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

      <div className="px-5">
        <Preview
          page={<Signin />}
          html={html}
          react={react}
          css={css}
          config={configs}
          title="Simple Sign In page"
          path="/components/forms/signin"
          play="https://play.tailwindcss.com/sMSGuAJ53m"
        />

        <Preview
          page={<FloatingLabel />}
          html={html}
          react={react}
          css={css}
          config={configs}
          title="Floating Label"
          path="/components/forms/floating-label"
          play="https://play.tailwindcss.com/B0dx0hvQJC"
        />

        <Preview
          page={<Table />}
          html={html}
          react={react}
          css={css}
          config={configs}
          title="Responsive Table"
          path="/components/data/table"
          play="https://play.tailwindcss.com/CAmK0XxhLk"
        />

        <Preview
          page={<MetricsDefault />}
          html={html}
          react={react}
          css={css}
          config={configs}
          title="Dashboard Metrics Default"
          path="/components/cards/metrics-default"
          play="https://play.tailwindcss.com/CAmK0XxhLk"
        />

        <Preview
          page={<MetricsStacked />}
          html={html}
          react={react}
          css={css}
          config={configs}
          title="Dashboard Metrics Stacked"
          path="/components/cards/metrics-stacked"
          play="https://play.tailwindcss.com/CAmK0XxhLk"
        />

        <Preview
          page={<MetricsMinimal />}
          html={html}
          react={react}
          css={css}
          config={configs}
          title="Dashboard Metrics Minimal"
          path="/components/cards/metrics-minimal"
          play="https://play.tailwindcss.com/CAmK0XxhLk"
        />
      </div>

      <div className="w-full px-5 mt-auto mb-10 ">
        <Subscribe />
      </div>
    </>
  );
}
