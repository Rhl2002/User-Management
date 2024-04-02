import React, { useEffect, useState } from 'react';

const TeamDetails = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const fetchTeam = async () => {
      let storedTeam = await localStorage.getItem('team');
      storedTeam = JSON.parse(storedTeam);
      setTeam(storedTeam);
    };
    fetchTeam();
  }, []);

  const handleRemoveMember = (memberId) => {
    const updatedTeam = team.filter(member => member._id !== memberId);
    setTeam(updatedTeam);
    localStorage.setItem('team', JSON.stringify(updatedTeam));
  };

  return (
    <div className="team-details bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Team Details</h2>
      <div>
        {team?.map(member => (
          <div key={member._id} className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <img src={member.avatar} alt="User Avatar" className="w-10 h-10 rounded-full mr-2" />
                <h3 className="text-lg font-semibold">{member.first_name} {member.last_name}</h3>
              </div>
              <button
                onClick={() => handleRemoveMember(member._id)}
                className="text-sm text-red-500 font-semibold focus:outline-none"
              >
                Remove
              </button>
            </div>
            <p className="text-gray-600">ID: {member.id}</p>
            <p className="text-gray-600">Email: {member.email}</p>
            <p className="text-gray-600">Gender: {member.gender}</p>
            <p className="text-gray-600">Domain: {member.domain}</p>
            <p className="text-gray-600">Availability: {member.available ? 'Available' : 'Not Available'}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamDetails;
