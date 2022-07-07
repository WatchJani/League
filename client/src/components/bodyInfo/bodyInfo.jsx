import React from "react";
import Styled from "./bodyInfo.module.css";
function BodyInfo({ fixtures }) {
  return (
    <div className={Styled.bodyInfo}>
      {fixtures.map((match, index) => (
        <div className={Styled.match} key={index}>
          <p className={Styled.homeTeamName}>{match.homeTeam} </p>
          <div className={Styled.logoAndPoints}>
            {match.homeTeam.logo ? (
              match.homeTeam.logo
            ) : (
              <img className={Styled.noLogo} />
            )}
            <p className={Styled.points}>
              {match.homeTeam.points ? match.homeTeam.points : 0} :{" "}
              {match.visitorsTeam.points ? match.visitorsTeam.points : 0}
            </p>
            {match.visitorsTeam.logo ? (
              match.visitorsTeam.logo
            ) : (
              <img className={Styled.noLogo} />
            )}
          </div>
          <p className={Styled.visitorsTeamName}>{match.visitorsTeam}</p>
        </div>
      ))}
    </div>
  );
}

export default BodyInfo;
