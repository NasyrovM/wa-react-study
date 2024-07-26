import { Link } from "react-router-dom";

export function ErrorPage()
{
    return (
        <>
            <h1>Error Page</h1>
            <Link to="/">Home</Link>
        </>
    )
}