import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateUser from "./components/CreateUser";
import UserDetails from "./components/UserDetails";
import TeamDetails from "./components/TeamDetails";

// import ViewTeam from "./components/ViewTeam";

function App() {
  axios.defaults.baseURL = "http://localhost:8000";

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Define the route paths */}
          <Route path="/user/:id" element={<UserDetails />} />
          <Route path="/" element={<Home />} />
          <Route path="/create-user" element={<CreateUser />} />
          {/* <Route path="*" element={<Home />} /> */}
          <Route path="/view-team" element={<TeamDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
