import React from "react";
import MovieList from "./model/MovieList";
import Detail from "./model/Detail";
import Navigation from "./component/Navigation";
import Info from "./model/Info";

import { Route, HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navigation></Navigation>
      <Route path="/" exact={true} component={MovieList} />
      <Route path="/Detail" component={Detail} />
      <Route path="/infoBtn" component={Info} />
    </HashRouter>
  );
}

export default App;
