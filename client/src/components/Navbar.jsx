import { NavLink, Route, Routes } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
}