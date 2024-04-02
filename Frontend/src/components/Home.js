import React, { useState, useEffect } from "react";
import axios from "axios";

// Import your components
import UserList from "./UserList";
import Filters from "./Filters";
import SearchBar from "./SearchBar";
import TeamCreator from "./TeamCreator";
import TeamDetails from "./TeamDetails";

function Home() {
  // State for managing users data
  const [users, setUsers] = useState([]);
  // State for managing filtered users
  const [filteredUsers, setFilteredUsers] = useState([]);
  // State for managing team details
  const [teamDetails, setTeamDetails] = useState(null);

  // Fetch users data from backend on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("/api/users");
        setUsers(response.data);
        setFilteredUsers(response.data); // Initially, set filtered users to all users
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleFilter = (filters) => {
    let filteredData = users;

    if (filters.domain.length > 0) {
      filteredData = filteredData.filter((user) =>
        user.domain.toLowerCase().includes(filters.domain.toLowerCase())
      );
    //   console.log("domain", filteredData);
    }
    if (filters.gender.length > 0) {
      if (filters.gender === "Others") {
        filteredData = filteredData.filter(
          (user) =>
            user.gender.toLowerCase() !== "male" &&
            user.gender.toLowerCase() !== "female"
        );
      } else {
        filteredData = filteredData.filter(
          (user) => user.gender.toLowerCase() === filters.gender.toLowerCase()
        );
      }
    //   console.log("gender", filteredData);
    }
    if (filters.availability.length > 0) {
      // Check if availability filter is not 'All'
      filteredData = filteredData.filter(
        (user) => user.available.toString() === filters.availability
      );
    //   console.log("avilability", filteredData);
    }
    // console.log("filter data", filteredData);
    // Update filtered users state
    setFilteredUsers(filteredData);
  };

  // Function to handle searching users
  const handleSearch = (query) => {
    if (!query) {
      setFilteredUsers(users); // Reset filtered users if search query is empty
    } else {
      const filteredData = users.filter(
        (user) =>
          user.first_name.toLowerCase().includes(query.toLowerCase()) ||
          user.last_name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredUsers(filteredData);
    }
  };

  // Function to handle creating a team
  const handleCreateTeam = (selectedUsers) => {
    // Send selectedUsers data to backend to create a new team
    // Update team details state with the response from backend
    // setTeamDetails(response.data);
  };

  return (
    <div className="app">
      <div className="text-l font-bold text-center">User Management System</div>
      {/* Search Bar Component */}
      <SearchBar onSearch={handleSearch} />

      {/* Filters Component */}
      <Filters onFilter={handleFilter} />

      {/* User List Component */}
      <UserList users={filteredUsers} />

      {/* Team Creator Component */}
      {/* <TeamCreator users={filteredUsers} onCreateTeam={handleCreateTeam} /> */}

      {/* Team Details Component */}
      {teamDetails && <TeamDetails team={teamDetails} />}
    </div>
  );
}

export default Home;
