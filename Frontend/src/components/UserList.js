import React, { useState, useEffect } from "react";
import TeamCreator from "./TeamCreator";
import { useNavigate } from "react-router-dom";

const UserList = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [team, setTeam] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const navigate = useNavigate();

  const usersPerPage = 20;

  useEffect(() => {
    const fetchTeam = () => {
      let storedTeam =  localStorage.getItem('team');
      // console.log("team output",storedTeam)
      if(storedTeam===null) {
        localStorage.setItem('team',JSON.stringify(team));
      }
      else{
        storedTeam = JSON.parse(storedTeam);
        setTeam(storedTeam);
      }
    };
    fetchTeam();
    setFilteredUsers(users); // Initialize filteredUsers with all users
  }, [users]);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Function to handle team name change
  const handleTeam = (user) => {
    const isUserAlreadyAdded = team?.some(
      (member) => member.domain === user.domain
    );

    if (isUserAlreadyAdded) {
      alert("A user from the same domain has already been added to the team.");
    } else {
      // Add the user to the team
      const updatedTeam = [...team, user];
      setTeam(updatedTeam);
      localStorage.setItem("team", JSON.stringify(updatedTeam));
    }
  };

  return (
    <>
      <div className="user-list mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <h2 className="text-xl font-bold mb-2 col-span-full">User List</h2>
        {currentUsers.map((user) => (
          <div
            key={user.id}
            className="user-card border border-gray-300 rounded p-4 mb-4"
          >
            <img
              src={user.avatar}
              alt="User Avatar"
              className="rounded-full w-16 h-16 mb-2 mx-auto cursor-pointer"
              onClick={() => navigate(`/user/${user.id}`)}
            />
            <p className="font-semibold text-center">
              {user.first_name} {user.last_name}
            </p>
            <p className="text-center">Email: {user.email}</p>
            <p className="text-center">Domain: {user.domain}</p>
            <p className="text-center">
              Availability: {user.available ? "Available" : "Not Available"}
            </p>
            <button
              onClick={() => handleTeam(user)}
              className={`mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
                !user.available ||
                team?.some((member) => member.domain === user.domain)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={
                !user.available ||
                team?.some((member) => member.domain === user.domain)
              }
            >
              Create Team
            </button>
          </div>
        ))}
      </div>
      <div className="pagination mt-4 flex justify-center flex-wrap">
        {Array.from(
          { length: Math.ceil(filteredUsers.length / usersPerPage) },
          (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className="px-4 py-2 bg-blue-500 text-white rounded mr-2 mb-2 hover:bg-blue-600"
            >
              {i + 1}
            </button>
          )
        )}
      </div>
      {/* <TeamCreator
        users={filteredUsers}
        currentPage={currentPage}
        usersPerPage={usersPerPage}
      /> */}
    </>
  );
};

export default UserList;
