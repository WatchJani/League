import HeaderInfo from "../../components/headerInfo/headerInfo";
import BodyInfo from "../../components/bodyInfo/bodyInfo";
import Styled from "./views.module.css";
import React, { useState } from "react";

// resoure: https://codesandbox.io/s/collapsible-table-rows-in-react-ybb28?file=/anim.js

export const seasonView = (round, index) => (
  <div key={index}>
    <HeaderInfo round={round} />
    <BodyInfo fixtures={round.fixtures} />
  </div>
);

export const TableView = ({ tableColumns, tableData }) => (
  <table>
    <TableHeader tableColumns={tableColumns} />
    <TableContent arrayOfObjects={tableData} />
  </table>
);

export const TableWithSubcontent = ({
  tableColumns,
  content,
  subTableColumns,
  type,
}) => (
  <table className={Styled.mainTable}>
    <TableHeader tableColumns={tableColumns} />
    <BiggerTableContent
      data={content}
      tableColumns={tableColumns}
      subTableColumns={subTableColumns}
      subcontentType={type}
    />
  </table>
);

const BiggerTableContent = ({ data, tableColumns, subTableColumns }) => (
  <tbody>
    {data.map((row, index) => (
      <DataRow
        key={index}
        data={row}
        tableColumns={tableColumns}
        subTableColumns={subTableColumns}
      />
    ))}
  </tbody>
);

const DataRow = ({ data, tableColumns, subTableColumns }) => {
  const MainRow = ({ onClick }) => (
    <tr onClick={onClick}>
      {tableColumns.map((name, index) => (
        <td key={index}>{data[name]}</td>
      ))}
    </tr>
  );
  const HiddenRow = ({ data, subTableColumns }) => (
    <tr className={Styled.hiddenRow}>
      <td colSpan={3}>
        <div>
          <TableView tableColumns={subTableColumns} tableData={data} />
        </div>
      </td>
    </tr>
  );
  const [isExtended, setIsExtended] = useState(false);
  return [
    <MainRow key="main" onClick={() => setIsExtended(!isExtended)} />,
    isExtended && (
      <HiddenRow
        key="hidden"
        data={data[data.nameOfArray]}
        subTableColumns={subTableColumns}
      />
    ),
  ];
};

const TableHeader = ({ tableColumns }) => (
  <thead>
    <tr>
      {tableColumns.map((title, index) => (
        <th key={index}>{title}</th>
      ))}
    </tr>
  </thead>
);

const TableContent = ({ arrayOfObjects }) => {
  let rowContent = [];

  arrayOfObjects.map((player, playerNumber) => {
    let columnNumber = 0;
    rowContent.push([]);
    for (let playersProp in player) {
      rowContent[playerNumber].push(
        <td key={columnNumber++}>{player[playersProp]}</td>
      );
    }
    return true;
  });

  return (
    <tbody>
      {arrayOfObjects.map((_, index) => (
        <tr key={index}>{rowContent[index]}</tr>
      ))}
    </tbody>
  );
};

export const Tabs = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(data.tabs[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className={Styled.tabView}>
      <div className={Styled.tabs}>
        {data.tabs.map((tab, tabNumber) => {
          return (
            <p
              key={tabNumber}
              data-index={tabNumber}
              className={
                Styled.tab +
                (currentIndex === tabNumber ? " " + Styled.currentTab : "")
              }
              onClick={(e) => {
                setCurrentIndex(e.target.dataset.index);
                setCurrentTab(data.tabs[currentIndex]);
              }}
            >
              {tab.ime}
            </p>
          );
        })}
      </div>
      <TableView
        tableColumns={data.tableColumns}
        tableData={currentTab[data.arrayName]}
      />
    </div>
  );
};
