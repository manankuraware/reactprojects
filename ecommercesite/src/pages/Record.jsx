import React from "react";
import LargeTable from "../components/LargeTabel/LargeTable.jsx";
import FilterDataCst from "../components/FilterDataCst.jsx";

function Record() {
  return (
    <React.Fragment>
      <FilterDataCst />
      <LargeTable />
    </React.Fragment>
  );
}

export default Record;
