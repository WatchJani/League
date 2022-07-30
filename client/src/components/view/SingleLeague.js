import { Outlet } from "react-router-dom";
import Header from "../navigation/Header";
import Styled from "./SingleLeague.module.css"
import { useParams } from "react-router-dom";

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




const SingleLeague = () => {

    const single_league = useParams()

    console.log(single_league)

    return (
        <>
            <div className={Styled.BG} />
            <Header menu={menu} league={league} />
            <Outlet />
        </>

    )
}

export default SingleLeague