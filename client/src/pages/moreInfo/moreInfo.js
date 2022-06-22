import HeaderInfo from "../../components/headerInfo/headerInfo";
import BodyInfo from "../../components/bodyInfo/bodyInfo";
import Styled from "./moreInfo.module.css";
const data = {
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

export const MoreInfo = () => {
  return (
    <div className={Styled.moreInfo}>
      {/* tabovi(po potrebi) */}

      {data.rounds.map((round, index) => (
        <div key={index}>
          <HeaderInfo round={round} />

          <BodyInfo fictures={round.fictures} />
        </div>
      ))}
    </div>
  );
};
