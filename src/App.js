import React from 'react';
import Main from "./component/Main/Main";
import {Switch, Route} from "react-router-dom";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import Profile from "./component/Profile/Profile";


function App() {
    return (
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/profile' component={Profile}/>
            <Route component={PageNotFound}/>
        </Switch>
    );
}

export default App;
