import HeaderInfo from "../../components/headerInfo/headerInfo";
import BodyInfo from "../../components/bodyInfo/bodyInfo";
import Styled from "./views.module.css";
import React, { useState } from "react";
import { Player } from "./testData";

const data = Player;
export const seasonView = (round, index) => (
  <div key={index}>
    <HeaderInfo round={round} />
    <BodyInfo fictures={round.fictures} />
  </div>
);

export const TabelView = ({ tableColumns, tabelData }) => (
  <table>
    {TableHeader(tableColumns)}
    {tabelContent(tabelData)}
  </table>
);

export const TableWithSubcontant = (tableColumns, mainData, hiddenData) => (
  <table>
    <TableHeader tableColumns={tableColumns} />
    <BiggerTableContant
      arrayOfObjectsForVisibleRows={mainData}
      arrayOfObjectsForHiddenRows={hiddenData}
    />
  </table>
);


const BiggerTableContant = (
  arrayOfObjectsForVisibleRows = null,
  arrayOfObjectsForHiddenRows = null
) => {
  let rowContent = [];
  let hiddenRowContent = [];
  arrayOfObjectsForVisibleRows.map((object, objectsIndex) => {
    let columnNumber = 0;
    rowContent.push([]);
    for (let prop in object) {
      rowContent[objectsIndex].push(
        <td key={columnNumber++}>{object[prop]}</td>
      );
    }
  });

  arrayOfObjectsForHiddenRows.map();

  return (
    <tbody>
      {arrayOfObjectsForVisibleRows.map((_, index) => (
        <tr key={index}>{rowContent[index]}</tr>
      ))}
    </tbody>
  );

  <tbody>
    {/* visible row visibleRowContant*/}
    {/* {/* hidden row hiddenRowsData (table, season view/} */}
  </tbody>;
};

const TableHeader = (tableColumns) => (
  <thead>
    <tr>
      {tableColumns.map((title, index) => (
        <th key={index}>{title}</th>
      ))}
    </tr>
  </thead>
);

const tabelContent = (arrayOfObjects) => {
  let rowContent = [];

  arrayOfObjects.map((player, playerNumber) => {
    let columnNumber = 0;
    rowContent.push([]);
    for (let playersProp in player) {
      rowContent[playerNumber].push(
        <td key={columnNumber++}>{player[playersProp]}</td>
      );
    }
  });

  return (
    <tbody>
      {arrayOfObjects.map((player, index) => (
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
                (currentIndex == tabNumber ? " " + Styled.currentTab : "")
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
      <TabelView
        tableColumns={data.tableColumns}
        tabelData={currentTab[data.arrayName]}
      />
    </div>
  );
};
