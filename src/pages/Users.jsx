import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const { users, deleteUser, startEditingUser } = useContext(UserContext);
  const [modal, setModal] = useState({ show: false, userId: null });
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setModal({ show: true, userId: id });
  };

  const confirmDelete = () => {
    deleteUser(modal.userId);
    setModal({ show: false, userId: null });
    alert('User deleted');
  };

  const handleEdit = (user) => {
    startEditingUser(user); 
    navigate('/create'); 
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-5">Users</h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="border p-4 flex justify-between items-center w-[500px]"
          >
            <div>
              <p className="text-3xl">
                Name: {user.fname} {user.lname}
              </p>
              <p className="text-3xl">Age: {user.age}</p>
              <p className="text-3xl">Profession: {user.prof}</p>
              <p className="text-3xl">Gender: {user.gender}</p>
            </div>
            <div>
              <button
                onClick={() => handleEdit(user)}
                className="bg-yellow-300 text-slate-800 px-7 text-lg py-3 mx-2 rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="bg-red-700 text-white text-lg px-7 py-3 rounded-lg"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {modal.show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-[500px] h-[400px] flex flex-col justify-around">
            <p className="text-3xl font-bold text-center">Are you sure that?</p>
            <div className="flex justify-center space-x-3">
              <button
                onClick={() => setModal({ show: false, userId: null })}
                className="bg-gray-500 text-white px-10 py-5 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-10 py-5"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
