import {Link} from "react-router-dom";
import {useState} from "react";
import {COUNTRY_AUTOCOMPLETE} from "../../lib/countries";
import {MemoAutocomplete} from "../helpers/Autocomplete";

export const Header = () => {

    const [searchField, setSearchField] = useState('')

    function autocomplete(e) {
        setSearchField(e.target.value)
    }

    return (<header>
        <h1>React GraphQL Test</h1>
        <input type="text" name="search" placeholder="country search" defaultValue={searchField}
               onChange={autocomplete}/>
        {searchField.length > 0 &&
            <MemoAutocomplete query={COUNTRY_AUTOCOMPLETE} dataKey="countries" params={{country: "^" + searchField}}/>
        }
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
    </header>)
}