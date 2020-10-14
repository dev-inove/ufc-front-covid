import React from 'react';
import './style.scss'
const AdminPageTitlen = () => (
<>

<div class="admin-page-title">
        <h1 class="admin-page-title__main"> title </h1>
        <h2 class="admin-page-title__sub">
            <slot></slot>
        </h2>
    </div>


</>

);

export default AdminPageTitlen;

