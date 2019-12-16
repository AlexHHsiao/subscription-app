import React from 'react';
import Main from "./component/Main/Main";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import Profile from "./component/Profile/Profile";


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main}/>
                <Route exact path='/profile' component={Profile}/>
                <Route component={PageNotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
