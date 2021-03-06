import React from "react";
import Navbar from "components/Navbar";
import ListLayout from "components/Listlayout";
import Preview from "components/Preview";
import Table from "./table";
import { css, configs } from "components/code/global";

export default function index() {
  return (
    <>
      <ListLayout active="ui" title="Data" current="data">
        <Preview
          page={<Table />}
          css={css}
          config={configs}
          title="Responsive Table"
          path="/components/data/table"
          play="https://play.tailwindcss.com/CAmK0XxhLk"
        />
      </ListLayout>
      <Navbar staticNav="true" />
    </>
  );
}
