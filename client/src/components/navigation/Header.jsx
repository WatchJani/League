import Styled from "./Header.module.css"
import { NavLink } from "react-router-dom"

const Header = ({ menu, league }) => {

    let activeStyle = {
        backgroundColor: "aliceblue",
    };

    return (
        <header className={Styled.Nav}>
            <div className={Styled.Display}>
                {league && league.map((data, index) => {
                    return (
                        <img key={index} className={Styled.League} src={data.logo} alt="" />
                    )
                })}
            </div>

            <div className={Styled.Menu}>
                <div className={Styled.Data}></div>
                {menu && menu.map((menu, index) => {
                    return (
                        <NavLink to={menu} style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        } className={Styled.Shape}>
                            {menu}
                        </NavLink>
                    )
                })}
            </div>
        </header >
    )
}

export default Header