import HeaderInfo from "../../components/headerInfo/headerInfo";
import BodyInfo from "../../components/bodyInfo/bodyInfo";
import Styled from "./views.module.css";
import React, { useState } from "react";

// izvor: https://codesandbox.io/s/collapsible-table-rows-in-react-ybb28?file=/anim.js

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

export const TableWithSubcontent = ({ tableColumns, content }) => (
  <table>
    {console.log(content)}
    <TableHeader tableColumns={tableColumns} />
    <BiggerTableContent data={content} tableColumns={tableColumns} />
  </table>
);

// const rowContent = (arrayOfObjects) => {
//   let row = [],
//     rowNumber = 0;
//   for (const object of arrayOfObjects) {
//     let columnNumber = 0;
//     row.push([]);
//     for (const property in object) {
//       if (
//         property !== object.nameOfArray &&
//         object[property] !== object.nameOfArray
//       )
//         row[rowNumber].push(<td key={columnNumber++}>{object[property]}</td>);
//     }
//     rowNumber++;
//   }

//   return row;
// };

const BiggerTableContent = ({ data, tableColumns }) => (
  <tbody>
    {data.map((row, index) => (
      <DataRow key={index} data={data[index]} tableColumns={tableColumns} />
    ))}
  </tbody>
);

const DataRow = ({ data, tableColumns }) => {
  const MainRow = ({ onClick }) => (
    <tr onClick={onClick}>
      {tableColumns.map((name, index) => (
        <td key={index}>{data[name]}</td>
      ))}
    </tr>
  );
  const HiddenRow = ({ data }) => (
    <tr>
      <td colSpan={3}>
        <div>
          <tabel>
            <thead>
              <th>colona 1</th>
              <th>colona 2</th>
              <th>colona 3</th>
              <th>colona 4</th>
            </thead>
            <tbody>
              {data.map(
                (row, index)=>
                <tr key={index}>
                  <td> {row.name}</td>
                  <td> {row.number}</td>
                  <td> {row.actual? 'true' : 'false'}</td>
                  <td> {row.locked}</td>
                </tr>
              )}
            </tbody>
          </tabel>
        </div>
      </td>
    </tr>
  );
  const [isExtended, setIsExtended] = useState(false);
  return [
    <MainRow key="main" onClick={() => setIsExtended(!isExtended)} />,
    isExtended && <HiddenRow key="hidden" data={data[data.nameOfArray]} />,
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
    return true;
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
      <TabelView
        tableColumns={data.tableColumns}
        tabelData={currentTab[data.arrayName]}
      />
    </div>
  );
};
