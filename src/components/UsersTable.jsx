import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/User/UserContext";

const UsersTable = () => {

  const { users, getUsers, getDeleteUser } = useContext(UserContext);


  useEffect(() => {
      getUsers();
  }, [])



  if(users == '') return(
    <div className="spiner_loading">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
    </div>
  )

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Users</th>
            <th scope="col">Email</th>
            <th scope="col">Display Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            {
              users.map((users) => (
                <tr key={users.ID}>
                  <td>{users.ID}</td>
                  <td>{users.user_login}</td>
                  <td>{users.user_email}</td>
                  <td>{users.display_name}</td>
                  <td>
                    <Link className="btn btn-primary" to={"/edituser/"+users.ID}>Editar</Link>
                    <button onClick={() => getDeleteUser(users.ID)} className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              ))
            }
        </tbody>
      </table>
    </div>
  );
};



export default UsersTable;
