import React from "react";
import Styled from "./headerInfo.module.css";
function HeaderInfo({ round }) {
  return (
  <div 
  className={Styled.headerInfo}
  >
    Round {round.number}
  </div>);
}

export default HeaderInfo;
