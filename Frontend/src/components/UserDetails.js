import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const UserDetails = () => {
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const params = useParams();
  useEffect(() => {
    const fetchUser = async () => {
      console.log(params);
      let res = await axios.get(`/api/users/${params.id}`);
      if (res.data.success === false) {
        navigate("/");
      } else {
        console.log("res",res.data.data[0]);
        await setUser(res.data.data[0]);
        console.log("user",user);
      }
    };
    fetchUser();
  }, [params.id]);

  const UpdateDetails = () => {
    const handleUpdateUser = async () => {
      setEditing(true);
      // let res = await axios.put(`/api/users/${params.id}`);
      // console.log(res);
      // console.log("Updating user:", user);
    };

    const handleDeleteUser = async (id) => {
      let res = await axios.delete(`/api/users/${id}`);
      // console.log("response", res);
      console.log("Successfully deleted user");

      navigate("/");
    };

    return (
      <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">User Details</h2>
        <div className="mb-4">
          <p className="font-bold">ID:</p>
          <p>{user.id}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">First Name:</p>
          <p>{user.first_name}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Last Name:</p>
          <p>{user.last_name}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Email:</p>
          <p>{user.email}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Gender:</p>
          <p>{user.gender}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Domain:</p>
          <p>{user.domain}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Availability:</p>
          <p>{user.available ? "Available" : "Not Available"}</p>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleUpdateUser}
          >
            Edit
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={()=>handleDeleteUser(user._id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  };

  const EditUserDetails = () => {
    const [editedUser, setEditedUser] = useState({ ...user });

    const handleChange = (e) => {
      const { name, value } = e.target;
    //   setUser((prevState) => ({
    //     ...prevState,
    //     [name]: value,
    //   }));
      setEditedUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleSave = async () => {
        console.log("user",user);
      try {
        let res = await axios.put(`/api/users/${user._id}`, editedUser);
        
        // let res = await axios.put(`/api/users/${user._id}`, user); 
        console.log("response", res.data);
        if (res.data.success === true) {
          setEditedUser(editedUser);
          setUser(editedUser);
        }
        setEditing(false);
      } catch (error) {
        
        console.error("Error updating user:", error);
      }
    };

    return (
      <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Edit User Details</h2>
        <div className="mb-4">
          <label className="font-bold">ID:</label>
          <input
            type="text"
            name="first_name"
            value={editedUser.id}
            readOnly
            className=" block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold">First Name:</label>
          <input
            type="text"
            name="first_name"
            value={editedUser.first_name}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold">Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={editedUser.last_name}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold">Email:</label>
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold">Gender:</label>
          <select
            name="gender"
            value={editedUser.gender}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="font-bold">Domain:</label>
          <input
            type="text"
            name="domain"
            value={editedUser.domain}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="font-bold">Availability:</label>
          <select
            name="available"
            value={editedUser.available}
            onChange={handleChange}
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value={true}>Available</option>
            <option value={false}>Not Available</option>
          </select>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => {
              setEditing(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };
  return <>{editing ? <EditUserDetails /> : <UpdateDetails />}</>;
};
export default UserDetails;
