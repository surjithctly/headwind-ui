import React from "react";
import Navbar from "components/Navbar";
import ListLayout from "components/Listlayout";
import Preview from "components/Preview";
import HamburgerAnimated, {
  html as HMA_html,
  react as HMA_react,
} from "./hamburger-animated";
import { css, configs } from "components/code/global";

export default function index() {
  return (
    <>
      <ListLayout active="ui" title="Navigation" current="navigation">
        <Preview
          page={<HamburgerAnimated />}
          html={HMA_html}
          react={HMA_react}
          css={css}
          config={configs}
          title="Hamburger Menu Animation"
          path="/components/navigation/hamburger-animated"
          play="https://play.tailwindcss.com/sMSGuAJ53m"
        />
      </ListLayout>
      <Navbar staticNav="true" />
    </>
  );
}
