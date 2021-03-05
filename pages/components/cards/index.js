import React from "react";
import Navbar from "components/Navbar";
import Subscribe from "components/Subscribe";
import Preview from "components/Preview";

import MetricsDefault from "./metrics-default";
import MetricsStacked from "./metrics-stacked";
import MetricsMinimal from "./metrics-minimal";
import MetricsIcon from "./metrics-icon";
import { css, configs } from "components/code/global";
import SideMenu from "components/SideMenu";

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
            <div className="mx-auto my-10 max-w-screen-2xl">
              <div className="flex items-center space-x-2 text-base text-gray-500">
                <span>Components</span>{" "}
                <span>
                  <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>{" "}
                <span>UI Elements</span>
              </div>

              <h1 className="mt-3 text-3xl font-bold">Cards</h1>
            </div>

            <Preview
              page={<MetricsDefault />}
              css={css}
              config={configs}
              title="Dashboard Metrics Default"
              path="/components/cards/metrics-default"
              play="https://play.tailwindcss.com/CAmK0XxhLk"
            />
            <Preview
              page={<MetricsStacked />}
              css={css}
              config={configs}
              title="Dashboard Metrics Stacked"
              path="/components/cards/metrics-stacked"
              play="https://play.tailwindcss.com/CAmK0XxhLk"
            />
            <Preview
              page={<MetricsMinimal />}
              css={css}
              config={configs}
              title="Dashboard Metrics Minimal"
              path="/components/cards/metrics-minimal"
              play="https://play.tailwindcss.com/CAmK0XxhLk"
            />
            <Preview
              page={<MetricsIcon />}
              css={css}
              config={configs}
              title="Dashboard Metrics with Icon"
              path="/components/cards/metrics-icon"
              play="https://play.tailwindcss.com/BykoD0ptr6"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-5 mt-auto mb-10 ">
        <Subscribe type="components" />
      </div>
    </>
  );
}
