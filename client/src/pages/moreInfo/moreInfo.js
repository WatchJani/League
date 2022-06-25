import TableColumn from "../../components/tableColumn/tableColumn";
import Styled from "./moreInfo.module.css";
import { seasonView, TabelView, Tabs } from "./Views";
import { Team } from "./testData";

const data = Team;
export const MoreInfo = ({
  tab: tabs = false,
  nested: isNested = false,
  arrayName = "players",
  table_column: tableColumns = ["ime", "prezime", "visina"],

  // * Season
  // nested = true,
  // arrayName = "rounds",
  // table_column = false,
}) => {
  return (
    <div className={Styled.moreInfo}>
      <h1>{data.name}</h1>
      {
        tabs && <Tabs />
      }
      {isNested && data[arrayName].map(seasonView)}

      {tableColumns && (
        <TabelView tableColumns={tableColumns} tabelData={data[arrayName]} />
      )}


    </div>
  );
};
