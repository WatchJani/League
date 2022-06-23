import HeaderInfo from "../../components/headerInfo/headerInfo";
import BodyInfo from "../../components/bodyInfo/bodyInfo";
import TableColumn from "../../components/tableColumn/tableColumn";
import Styled from "./moreInfo.module.css";
const Season = {
  nameOfArray: "rounds",
  name: "LaLiga 22/23",
  number: "22/23",
  actual: true,
  rounds: [
    {
      id: 1,
      number: 1,
      fictures: [
        {
          homeTeam: "Barcelona",
          visitorsTeam: "Atletiko",
        },
        {
          homeTeam: "Atletiko",
          visitorsTeam: "Barcelona",
        },
      ],
    },
    {
      id: 2,
      number: 2,
      fictures: [
        {
          homeTeam: "Barcelona",
          visitorsTeam: "Atletiko",
        },
        {
          homeTeam: "Atletiko",
          visitorsTeam: "Barcelona",
        },
      ],
    },
  ],
};

const Team = {
  
  nameOfArray: "players",
  name: "Barcelona",
  players: [
    {
      ime: "leonel",
      prezime: "messi",
      visina: 169,
    },
    {
      ime: "leonel",
      prezime: "messi",
      visina: 169,
    },
  ],
};

const Leagues = {
  nameOfArray: "sesonse",
  name: "LaLiga",
  sesonse: [
    {
      name: "sezona1",
    },
    {
      name: "sezona2",
    },
    {
      name: "sezona3",
    },
  ],
};

const Player_tab1 = {
  nameOfArray: "statistic",
  ime: "leonel",
  prezime: "messi",
  visina: 169,
  statistic: [
    {
      goals: 800,
      assists: 500,
      red_cards: 2,
      yellow_cards: 21,
      penalti_goals: 21,
    },
  ],
};

const Player_tab2 = {
  nameOfArray: "statistic",
  ime: "leonel",
  prezime: "messi",
  visina: 169,
  statistic: [
    {
      goals: 50,
      assists: 12,
      red_cards: 0,
      yellow_cards: 1,
      penalti_goals: 2,
    },
  ],
};
const data=Team;
export const MoreInfo = ({
  tab = false,
  nested = false,
  arrayName = "players",
  table_column = ["ime", "prezime", "visina"],
}) => {
  const tableContent = table_column
    ? data[arrayName].map((element, index) => (
      <tr key={index}>
        {table_column &&
          !index &&
          element.map((column, index) => <th key={index}>{column}</th>)}

        {!table_column && <HeaderInfo round={element} />}
        {nested && <BodyInfo fictures={element.fictures} />}
      </tr>
    ))
    : table_column;
  return (
    <div className={Styled.moreInfo}>
      <h1>{data.name}</h1>

      {table_column ? (
        <tabel>{tableContent}</tabel>
      ) : (
        data[arrayName].map((element, index) => (
          <div key={index}>
            {!table_column && <HeaderInfo round={element} />}
            {nested && <BodyInfo fictures={element.fictures} />}
          </div>
        ))
      )}
    </div>
  );
};
