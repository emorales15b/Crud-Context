import React, { useReducer } from 'react';
import axios from 'axios';
import UserContext from './UserContext';
import UserReducer from './UserReducer';
import Swal from 'sweetalert2'

const UserState = (props) => {
    const initialState = {
        users: [],
        show_user_edit: ''
    }

    const [state, dispatch] = useReducer(UserReducer,initialState)

    const getUsers = async () => {
        const res = await axios.get('http://localhost/api-rest-react/wp-json/users_route_api/v2')
        console.log(res.data)
        dispatch({
            type: 'GET_USERS',
            payload: res.data
        })
    }

    const getAddUser = async (username,displayname,email,password) => {
      const res = await axios.get("http://localhost/api-rest-react/wp-json/add_users_route_api/v2"+"?user="+username+"&displayname="+displayname+"&email="+email+"&password="+password)
      console.log(res.data)
      dispatch({
          type: 'GET_ADD_USER',
          payload: res.data
      })
    }

    const getEditUser = async (id,displayname,email,password) => {
      const res = await axios.get("http://localhost/api-rest-react/wp-json/edit_user_route_api/v2"+"?user="+id+"&displayname="+displayname+"&email="+email+"&password="+password)
      console.log(res.data)
      dispatch({
          type: 'GET_EDIT_USER',
          payload: res.data
      })
    }


    const getShowEditUser = async (id) => {
      const res = await axios.get("http://localhost/api-rest-react/wp-json/show_user_edit_route_api/v2" +
      "?id_user=" +
      id)
      dispatch({
          type: 'GET_SHOW_EDIT_USER',
          payload: res.data
      })
    }

    const getDeleteUser = async (id) => {

        Swal.fire({
            title: 'Are you sure you want to delete this user?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async(result) => {
            if (result.isConfirmed) {
    
              if(id == 1){
                Swal.fire(
                  'You can not delete this user',
                  'This is a super user',
                  'danger'
                )
              }else{
                  
                const res = await axios.get('http://localhost/api-rest-react/wp-json/delete_users_route_api/v2?id='+id)
                console.log(res.data)
                dispatch({
                    type: 'GET_DELETE_USER',
                    payload: res.data
                })
    
                
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                
              }
              
            }
          })

        
    }



    return(
        <UserContext.Provider value={{
            users: state.users,
            show_user_edit: state.show_user_edit,
            getUsers,
            getDeleteUser,
            getAddUser,
            getShowEditUser,
            getEditUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;