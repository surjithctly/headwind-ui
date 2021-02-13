import React from "react";
import Navbar from "../../components/Navbar";
import Subscribe from "../../components/Subscribe";
import Preview from "../../components/Preview";
import Signin from "./forms/signin";
import FloatingLabel from "./forms/floating-label";
import Table from "./data/table";
import { html, react, css, configs } from "./forms/code";

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
          title="Floating Label"
          path="/components/forms/floating-label"
          play="https://play.tailwindcss.com/B0dx0hvQJC"
        />

        <Preview
          page={<Table />}
          title="Responsive Table"
          path="/components/data/table"
          play="https://play.tailwindcss.com/CAmK0XxhLk"
        />
      </div>

      <div className="w-full px-5 mt-auto mb-10 ">
        <Subscribe />
      </div>
    </>
  );
}
