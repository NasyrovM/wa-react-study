import { Outlet, Link } from "react-router-dom";

export function Layout()
{
    return(
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="asdf">Asdf</Link>
            </li>
        </ul>
        <Outlet />
    </div>
    );
}