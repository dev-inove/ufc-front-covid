import React from 'react';
import './style.scss'

const UserCard = () => (
<>

<div class="user-card">
        <div class="user-card__top">
            <h1> user.fullname </h1>
            <h2>--</h2>
            <hr />
        </div>
        <div class="user-card__bottom">
            <div class="user-card__bottom--attr">
                <h2>Ações</h2>
                <h3>--</h3>
            </div>

            <div class="user-card__bottom--attr">
                <h2>Produções</h2>
                <h3>--</h3>
            </div>

            <div class="user-card__bottom--attr">
                <h2>Necessidades</h2>
                <h3>--</h3>
            </div>
        </div>
    </div>

</>

);

export default UserCard;


