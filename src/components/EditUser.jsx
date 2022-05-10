import React, { useEffect, useState, useRef, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import UserContext from "../context/User/UserContext";

const EditUser = () => {
  const { target } = useParams();
  const navigate= useNavigate();

  const { getShowEditUser, show_user_edit, getEditUser } = useContext(UserContext);

  const inputUser = useRef();
  const inputDisplayName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();

  const [loading, setLoading] = useState(true);

  const [dataUser, setDataUser] = useState({
      id: "",
      user: "",
      display_name: "",
      email: "",
      password: ""
  });

  useEffect(() => {
    getShowEditUser(target)
    console.log(show_user_edit)
  }, []);


  const sendDataEditUser = () => {
        const add_inputDisplayName = inputDisplayName.current.value;
        const add_inputEmail = inputEmail.current.value;
        const add_inputPassword = inputPassword.current.value;

        if(add_inputDisplayName === ''){
            Swal.fire( 'Empty Display Name field','Please verify it','error');
        }else if(add_inputEmail === ''){
            Swal.fire( 'Empty Email field','Please verify it','error');
        }else if(add_inputPassword === ''){
            Swal.fire( 'Empty Password field','Please verify it','error');
        }else{
          
            getEditUser(target, add_inputDisplayName, add_inputEmail, add_inputPassword)

            navigate('/');
            
        }
  }

  if (show_user_edit == '')
    return (
      <div className="spiner_loading">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <div>
      <div className="row margin_0">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="div_title_adduser">Edit User</div>
          
          <div className="form-floating mb-3">
            <input
              ref={inputUser}
              type="text"
              id="user"
              className="form-control"
              placeholder="User"
              defaultValue={show_user_edit[0]['user_login']}
              disabled
            />
            <label htmlFor="user">User</label>
          </div>
          <div className="form-floating mb-3">
            <input
              ref={inputDisplayName}
              type="text"
              id="displayname"
              className="form-control"
              placeholder="Display Name"
              defaultValue={show_user_edit[0]['display_name']}
            />
            <label htmlFor="displayname">Display Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              ref={inputEmail}
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              defaultValue={show_user_edit[0]['user_email']}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              ref={inputPassword}
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              defaultValue={show_user_edit[0]['user_pass']}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-3">
            <button onClick={sendDataEditUser} className="btn btn-success width_100">
              Edit User
            </button>
          </div>
          <div className="form-floating">
            <Link to={"/"} className="btn btn-dark width_100">
              Go back
            </Link>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default EditUser;
