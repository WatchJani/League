import Styled from "./container.module.css"

export const Container = ({ children }) => {
    return (
        <div className={Styled.Container}>
            {children}
        </div>
    )
}