import React from 'react';
import Main from "./component/Main/Main";
import {Switch, Route} from "react-router-dom";
import PageNotFound from "./component/PageNotFound/PageNotFound";


function App() {
    return (
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route component={PageNotFound}/>
        </Switch>
    );
}

export default App;
