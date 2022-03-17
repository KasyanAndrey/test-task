import React from "react";
import css from "./Students.module.css";

import Filter from "../../components/Filter/Filter";
import Headline from "../../components/Headline/Headline";
import Spreadsheet from "../../components/Spreadsheet/Spreadsheet";
import Pagination from "../../components/Pagination/Pagination";

const Students = ({ items }) => {
  return (
    <section className={css.section}>
      <Filter />
      <Headline />
      <Spreadsheet items={items} />
      <Pagination />
    </section>
  );
};
export default Students;
