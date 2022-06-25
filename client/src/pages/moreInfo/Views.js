import HeaderInfo from "../../components/headerInfo/headerInfo";
import BodyInfo from "../../components/bodyInfo/bodyInfo";

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

export const Tabs = ({data}) => {return <h1>fuck</h1>}



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
