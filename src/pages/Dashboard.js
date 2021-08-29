import React from 'react'
import { auth } from '../Firebase'
import { withRouter } from 'react-router'

const Dashboard = ({history}) => {
    return (
        <div>
            Hello from dashboard page
            <button onClick={()=>{
                auth.signOut();
                history.push("/")
            }}>
                Sign Out
            </button>
        </div>
    )
}

export default withRouter(Dashboard)
