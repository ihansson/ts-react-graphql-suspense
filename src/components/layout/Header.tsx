import {Link} from "react-router-dom";

export const Header = () => (
    <header>
        <h1>React GraphQL Test</h1>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/continent/EU">Europe</Link>
            </li>
            <li>
                <Link to="/country/SE">Sweden</Link>
            </li>
        </ul>
    </header>
)