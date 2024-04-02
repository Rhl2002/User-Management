import axios from "axios";
import React, { useState } from "react";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    gender: "",
    avatar: "",
    domain: "",
    available: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post("/api/users", formData);
    if (res.data.success === true) {
      setFormData({
        id: "",
        first_name: "",
        last_name: "",
        email: "",
        gender: "",
        avatar: "",
        domain: "",
        available: false,
      });
      alert("User Created Successfully");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-bold mb-4">Create User</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="id"
            >
              ID
            </label>
            <input
              className="appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="id"
              type="text"
              placeholder="ID"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="first_name"
            >
              First Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="first_name"
              type="text"
              placeholder="First Name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="last_name"
            >
              Last Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="last_name"
              type="text"
              placeholder="Last Name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="gender"
            >
              Gender
            </label>
            <select
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="avatar"
            >
              Avatar URL
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="avatar"
              type="text"
              placeholder="Avatar URL"
              name="avatar"
              value={formData.avatar}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="domain"
            >
              Domain
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="domain"
              type="text"
              placeholder="Domain"
              name="domain"
              value={formData.domain}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="available"
            >
              Available
            </label>
            <div className="flex items-center">
              <input
                className="mr-2 leading-tight"
                id="available"
                type="checkbox"
                name="available"
                checked={formData.available}
                onChange={(e) =>
                  setFormData((prevState) => ({
                    ...prevState,
                    available: e.target.checked,
                  }))
                }
              />
              <label className="text-gray-700 text-sm" htmlFor="available">
                Available
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
