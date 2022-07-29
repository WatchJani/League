import Styled from "./Home.module.css"
import { Container } from "../../components/container/container"
import Header from "../../components/navigation/Header"
import LeagueCard from "../../components/LeagueCard/LeagueCard"

const menu = ["Table", "Ficture", "Player Stats"]
const league = [
    {
        id: 1,
        liga: "LEAGUE 1",
        logo: "./images/medo.png"
    },
    {
        id: 2,
        liga: "LEAGUE 2",
        logo: "./images/medo2.png"
    },
    {
        id: 4,
        liga: "TOP GUN",
        logo: "./images/duh.png"
    },
    {
        id: 5,
        liga: "ROYAL",
        logo: "./images/royal.png"
    },
    {
        id: 1,
        liga: "LEAGUE 1",
        logo: "./images/medo.png"
    },
    {
        id: 2,
        liga: "LEAGUE 2",
        logo: "./images/medo2.png"
    },
    {
        id: 1,
        liga: "LEAGUE 1",
        logo: "./images/medo.png"
    },
    {
        id: 2,
        liga: "LEAGUE 2",
        logo: "./images/medo2.png"
    },
    {
        id: 4,
        liga: "TOP GUN",
        logo: "./images/duh.png"
    },
    {
        id: 5,
        liga: "ROYAL",
        logo: "./images/royal.png"
    },
    {
        id: 1,
        liga: "LEAGUE 1",
        logo: "./images/medo.png"
    },
    {
        id: 2,
        liga: "LEAGUE 2",
        logo: "./images/medo2.png"
    },
]

const Home = () => {
    return (
        <>

            <div className={Styled.BG} />

            <div className={Styled.MaxHeight}>
                <Header menu={menu} league={league} />

                <Container >
                    <div className={Styled.Container}>
                        {league.map((data, index) => {
                            return (
                                <LeagueCard data={data} key={index} />
                            )
                        })}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Home