import { Outlet, NavLink } from "react-router-dom";

export const SharedLayout = (props) => {
    return (   
        <div>
            <header>
            <nav>
                <NavLink to="/">Shop</NavLink>
                <NavLink to="/cart">Shopping Cart</NavLink>
            </nav>
            </header>
            <Outlet />
        </div>
    )
}
