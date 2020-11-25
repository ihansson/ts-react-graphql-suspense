import {Link} from "react-router-dom";
import {useState} from "react";
import {COUNTRY_AUTOCOMPLETE} from "../../lib/countries";
import {MemoAutocomplete} from "../helpers/Autocomplete";
import {Button, PageHeader, Input} from 'antd'

export const Header = () => {

    const [searchField, setSearchField] = useState('')

    function autocomplete(e) {
        setSearchField(e.target.value)
    }

    return (<header>
        <PageHeader
            className="site-page-header"
            onBack={() => window.history.back()}
            title="GraphQL Country Browser"
            extra={[
                <Input style={{width: "150px"}} key="1" type="text" name="search" placeholder="country search" defaultValue={searchField}
                       onChange={autocomplete}/>,
                <Link key="2" to="/"><Button type="primary">Home</Button></Link>,
                <Link key="3" to="/continent/EU"><Button>Europe</Button></Link>,
                <Link key="4" to="/country/SE"><Button>Sweden</Button></Link>,
            ]}
        />
        {searchField.length > 0 &&
            <MemoAutocomplete query={COUNTRY_AUTOCOMPLETE} dataKey="countries" params={{country: "^" + searchField}}/>
        }
    </header>)
}