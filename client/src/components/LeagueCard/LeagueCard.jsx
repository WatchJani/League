import Styled from "./LeagueCard.module.css"

const LeagueCard = ({ data: { liga, logo } }) => {
    return (
        <div className={Styled.Wrapper}>
            <img className={Styled.HomeLeague} src="./images/Za_lige.png" alt="" />
            <div className={Styled.Cover}>
                <img className={Styled.LeagueImage} src={logo} alt="" />
                <h1 className={Styled.leagueName}>{liga}</h1>
            </div>
        </div>
    )
}

export default LeagueCard