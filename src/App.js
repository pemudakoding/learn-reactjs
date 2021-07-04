import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import Example from "pages/Example";
import "assets/scss/style.scss";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/example" component={Example}></Route>
                    <Route path="/" component={LandingPage}></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
