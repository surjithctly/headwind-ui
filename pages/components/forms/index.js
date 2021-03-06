import React from "react";
import Navbar from "components/Navbar";
import ListLayout from "components/Listlayout";
import Preview from "components/Preview";
import Signin, { react as signinReact } from "./signin";
import FloatingLabel from "./floating-label";
import { css, configs } from "components/code/global";

export default function index() {
  return (
    <>
      <ListLayout active="ui" title="Forms" current="forms">
        <Preview
          page={<Signin />}
          react={signinReact}
          css={css}
          config={configs}
          title="Simple Sign In page"
          path="/components/forms/signin"
          play="https://play.tailwindcss.com/sMSGuAJ53m"
        />

        <Preview
          page={<FloatingLabel />}
          css={css}
          config={configs}
          title="Floating Label"
          path="/components/forms/floating-label"
          play="https://play.tailwindcss.com/B0dx0hvQJC"
        />
      </ListLayout>
      <Navbar staticNav="true" />
    </>
  );
}
