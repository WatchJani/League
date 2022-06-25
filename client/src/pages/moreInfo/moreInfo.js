import TableColumn from "../../components/tableColumn/tableColumn";
import Styled from "./moreInfo.module.css";
import { seasonView, TabelView, Tabs } from "./Views";
import { Player_tab1, Player_tab2 } from "./testData";

const data = Player_tab1;
export const MoreInfo = ({
  tab: tabs = [Player_tab1, Player_tab2],
  nested: isNested = false,
  arrayName = "statistic",
  table_column: tableColumns = [
    "goals",
    "assists",
    "red_cards",
    "yellow_cards",
    "penalti_goals",
  ],

  // * Season
  // tab: tabs = false,
  // nested = true,
  // arrayName = "rounds",
  // table_column = false,

  // * Team
  // tab: tabs = false,
  // nested: isNested = false,
  // arrayName = "players",
  // table_column: tableColumns = ["ime", "prezime", "visina"],
}) => {
  return (
    <div className={Styled.moreInfo}>
      <h1>{data.name}</h1>
      {tabs && <Tabs data={{ tabs, arrayName, tableColumns }} />}

      {isNested && data[arrayName].map(seasonView)}

      {tableColumns && !tabs && (
        <TabelView tableColumns={tableColumns} tabelData={data[arrayName]} />
      )}
    </div>
  );
};
