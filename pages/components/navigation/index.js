import React from "react";
import Navbar from "components/Navbar";
import Subscribe from "components/Subscribe";
import Preview from "components/Preview";
import HamburgerAnimated, {
  html as HMA_html,
  react as HMA_react,
} from "./hamburger-animated";
import { css, configs } from "components/code/global";
import SideMenu from "components/SideMenu";

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

      <div className="px-5 md:px-10 2xl:px-16">
        <div className="grid gap-10 lg:grid-cols-fr">
          <div className="">
            <SideMenu />
          </div>
          <div className="">
            <div className="px-5">
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
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-5 mt-auto mb-10 ">
        <Subscribe type="components" />
      </div>
    </>
  );
}
