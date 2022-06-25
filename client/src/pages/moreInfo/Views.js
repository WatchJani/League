import HeaderInfo from "../../components/headerInfo/headerInfo";
import BodyInfo from "../../components/bodyInfo/bodyInfo";
import Styled from "./views.module.css";
import React, { useState } from 'react';


export const seasonView = (round, index) => (
  <div key={index}>
    <HeaderInfo round={round} />
    <BodyInfo fictures={round.fictures} />
  </div>
);

export const TabelView = ({ tableColumns, tabelData }) => (
  <table>
    {tabelHeader(tableColumns)}
    {tabelContent(tabelData)}
  </table>
);




export const Tabs = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(data.tabs[0]);
  
  return (
    <div className={Styled.tabView}>
      <div className={Styled.tabs}>
        {data.tabs.map((tab, tabNumber) => {
          return (
            <p key={tabNumber} data-index={tabNumber} className={Styled.tab} onClick={e=>setCurrentTab(data.tabs[e.target.dataset.index])}>
              {tab.ime}
            </p>
          );
        })}
      </div>
    <TabelView tableColumns={data.tableColumns} tabelData={currentTab[data.arrayName]}/>
    </div>

  );
};

const tabelHeader = (tableColumns) => (
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
