import React from "react";
import { Router } from "react-router-dom";

import History from "./services/history";
import Routes from "./routes/router";

function App() {
  return (
    <div>
      <Router history={History}>
        <Routes />
      </Router>
    </div>
  );
}
export default App;
