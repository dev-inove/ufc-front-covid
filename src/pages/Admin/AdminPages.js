import React from 'react';
import './style.scss'
import Sidebar from './Sidebar'
const AdminPages = () => (
<>

<div class="admin-pages">
        <Sidebar />
        <div class="pad-sm pad-xs-vr">
            <router-view></router-view>
        </div>
    </div>


</>

);

export default AdminPages;

