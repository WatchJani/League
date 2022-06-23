import React from "react";
import Styled from "./tableColumn.module.css";

export default function TableColumn({ tableColumns }) {
  return (
    <tr>
      {tableColumns.map((column, index) => (
        <th key={index}>{column}</th>
      ))}
    </tr>
  );
}
