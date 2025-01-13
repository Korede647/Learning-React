import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

function GetUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://ecommerce-backend-cxlj.onrender.com/api/v1/users/list/');
        setUsers(response.data.data);
        //log user 
        console.log(response.data);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h1>User List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Shipping Address</th>
            <th>Phone number</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              
              <td>{user.hasShippingAddress ? 'Yes' : 'No'}</td>
              
              {user.hasShippingAddress ? `${user.shippingAddress["phone"]}` : 'no contact' } 
             
              <td>{new Date(user.createdAt).toLocaleString()}</td>
              <td>{new Date(user.updatedAt).toLocaleString()}</td>
              
            </tr>
          ))};
        </tbody>
      </table>
      <ul>
        
      </ul>
    </>
  );
}

export default GetUserList;