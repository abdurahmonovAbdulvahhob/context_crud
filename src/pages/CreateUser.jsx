import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';

const CreateUser = () => {
  const { addUser, updateUser, editingUser, cancelEditing } = useContext(UserContext);

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    age: '',
    prof: '',
    gender: '',
  });

  // Populate form when editing a user
  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    } else {
      setFormData({
        fname: '',
        lname: '',
        age: '',
        prof: '',
        gender: '',
      });
    }
  }, [editingUser]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fname, lname, age, prof, gender } = formData;

    if (fname && lname && age && prof && gender) {
      if (editingUser) {
        updateUser(editingUser.id, formData);
        alert('User updated');
      } else {
        addUser({ id: Date.now(), ...formData });
        alert('User created');
      }
      setFormData({ fname: '', lname: '', age: '', prof: '', gender: '' });
    } else {
      alert('Please fill all fields.');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-5">
        {editingUser ? 'Edit User' : 'Create User'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5 flex flex-col w-[500px] text-lg">
        <input
          type="text"
          name="fname"
          placeholder="First Name"
          value={formData.fname}
          onChange={handleChange}
          className="border p-4"
        />
        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          value={formData.lname}
          onChange={handleChange}
          className="border p-4"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="border p-4"
        />
        <input
          type="text"
          name="prof"
          placeholder="Profession"
          value={formData.prof}
          onChange={handleChange}
          className="border p-4"
        />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border p-4"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <div className="flex space-x-4">
          <button type="submit" className="bg-blue-500 text-white px-10 py-5 rounded-lg text-lg">
            {editingUser ? 'Update User' : 'Create User'}
          </button>
          {editingUser && (
            <button
              type="button"
              onClick={cancelEditing}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
