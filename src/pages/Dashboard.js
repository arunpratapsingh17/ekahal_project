import React from 'react'
import { auth } from '../Firebase'
import { withRouter } from 'react-router'
import Chart from '../components/Chart'
import Date from '../components/Date'
import DataTable from '../components/Table/DataTable'
import AnimeSearch from '../components/AnimeSearch/AnimeSearch'

const Dashboard = ({history}) => {
    return (
        <div>
            <Chart />
            <Date />
            <DataTable />
            <AnimeSearch />
            {/* <button onClick={()=>{
                auth.signOut();
                history.push("/")
            }}>
                Sign Out
            </button> */}
        </div>
    )
}

export default withRouter(Dashboard)
