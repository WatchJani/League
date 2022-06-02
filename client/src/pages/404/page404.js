import Styled from "./page404.module.css"
import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div className={Styled.Body}>
      <h1 className={Styled.H1}>404</h1>
      <div className={Styled.cloak__wrapper}>
        <div className={Styled.cloak__container}>
          <div className={Styled.cloak} />
        </div>
      </div>
      <div className={Styled.info}>
        <h2 className={Styled.H2}>We can't find that page</h2>
        <p className={Styled.paragraf}>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.</p> <Link to="/home" className={Styled.link}>Home</Link> {" "}
      </div>
    </div>
  );
};
