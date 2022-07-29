import Styled from "./Header.module.css"

const Header = ({ menu, league }) => {
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
                        <button key={index} className={Styled.Shape}>{menu}</button>
                    )
                })}
            </div>
        </header >
    )
}

export default Header