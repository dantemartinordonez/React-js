import React, { useContext } from 'react';
import UserContext from '../../context/userContext/UserContext';

const UserDetail = () => {
  const { user, editUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    editUser(name === 'name' ? value : user.name, name === 'age' ? value : user.age);
  };

  return (
    <div>
      <h2>UserDetail</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <div>
        <label>
          Name:
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input type="text" name="age" value={user.age} onChange={handleChange} />
        </label>
      </div>
    </div>
  );
};

export default UserDetail;