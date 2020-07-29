import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component";
import VillagersList from "./components/villagers-list.component";
import EditVillager from "./components/edit-villager.component";
import AddVillager from "./components/add-villager.component";
import DeleteVillager from "./components/delete-villager.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={VillagersList} />
        <Route path="/edit/:id" component={EditVillager} />
        <Route path="/create" component={AddVillager} />
        <Route path="/remove/:id" component={DeleteVillager} />
      </div>
    </Router>
  );
}

export default App;
