import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <Link to="/login">login</Link>
            <Link to="/register">register</Link>
        </>
    )
}