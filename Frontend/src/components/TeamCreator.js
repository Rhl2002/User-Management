import React, { useState } from 'react';

const TeamCreator = ({ users, currentPage, usersPerPage=20}) => {
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleUserSelect = (userId) => {
    // Implement logic to toggle selection of users
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter(id => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handleCreateTeam = () => {
    // Implement logic to create team with selected users
    // onCreateTeam(selectedUsers);
  };

  // Get users for current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="team-creator">
      <h2 className="text-xl font-bold mb-2">Create Team</h2>
      <ul>
        {currentUsers.map(user => (
          <li key={user.id} className="mb-2">
            <label className="flex items-center">
              <input type="checkbox" onChange={() => handleUserSelect(user.id)} className="mr-2" />
              {user.first_name} {user.last_name}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleCreateTeam} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Team</button>
    </div>
  );
};

export default TeamCreator;
