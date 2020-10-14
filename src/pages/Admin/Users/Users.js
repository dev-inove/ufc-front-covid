import React from 'react';
import './style.scss'
import UserCard from './UserCard'
import AdminPageTitle from '../General/AdminPageTitle'
const Users = () => (
<>

<div class="admin-users">
        <AdminPageTitle title="Todos Usuários" />
        <div class="card-container">
            <UserCard  />
        </div>
    </div>

</>

);

export default Users;

