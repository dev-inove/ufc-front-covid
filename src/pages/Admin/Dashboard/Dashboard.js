import React from 'react';
import DashboardHeader  from './DashboardHeader';
import DashboardTableCard  from './DashboardTableCard';
import Table from '../General/Table';
const Dashboard = () => (
<>

<div>
        <DashboardHeader />
        <div class="card-row">
            <DashboardTableCard />
        </div>
        <div class="table-container">
            <Table />
        </div>
    </div>


</>

);

export default Dashboard;






