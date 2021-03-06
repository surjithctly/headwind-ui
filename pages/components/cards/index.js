import React from "react";
import ListLayout from "components/Listlayout";

import Preview from "components/Preview";

import MetricsDefault from "./metrics-default";
import MetricsStacked from "./metrics-stacked";
import MetricsMinimal from "./metrics-minimal";
import MetricsIcon from "./metrics-icon";
import { css, configs } from "components/code/global";

export default function index() {
  return (
    <>
      <ListLayout active="ui" title="Cards" current="cards">
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
      </ListLayout>
    </>
  );
}
