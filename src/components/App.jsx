import React from "react";
import { Route, Switch } from "react-router-dom";

import Bigin from "./components/Bigin";
import Info from "./components/Info";
import GetStarted from "./components/GetStarted";
import Caution from "./components/Caution";
import Survey from "./components/Survey";
import Result from "./components/Result";

const App = props => {
  return (
    <Switch>
      <Route exact path={"/"} component={Bigin} />
      <Route exact path={"/info"} component={Info} />
      <Route exact path={"/getStarted"} component={GetStarted} />
      <Route exact path={"/caution"} component={Caution} />
      <Route exact path={"/survey"} component={Survey} />
      <Route exact path={"/result"} component={Result} />
    </Switch>
  );
};

export default App;
