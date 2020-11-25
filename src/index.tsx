import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from "./components/layout/Main";
import {ApolloProvider} from "@apollo/client";
import {client} from "./lib/countries";
import 'antd/dist/antd.css';

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <Main/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);