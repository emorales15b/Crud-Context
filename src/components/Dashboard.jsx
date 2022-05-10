import React from 'react'
import UsersTable from './UsersTable'
import {Link} from 'react-router-dom'


const Dashboard = () => {
    return(
        <div>
            <div className="row margin_0 row_dasboard">
                <div className="col-md-6">
                    <div className="div_users_title">Users</div>
                </div>
                <div className="col-md-6">
                    <div className="float_right">
                        <Link className="btn btn-success" to={"/adduser"}>Add User</Link>
                    </div>
                </div>

                <UsersTable />

            </div>

        </div>
    )
}

export default Dashboard;