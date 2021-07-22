import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Example from "pages/Example";
import "assets/scss/style.scss";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exac path="/example" component={Example}></Route>
                    <Route exac path="/properties/:id" component={DetailsPage}></Route>
                    <Route path="/" component={LandingPage}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
