import React from 'react';
import './style.scss'
const Sidebar = () => (
<>

<div class="sidebar">
        <img src="opa" alt="logo-combate-covid" />
        <div class="list__area">
            <ul class="sidebar__list">
                <router-link
                    tag="li"
                    to="/dashboard"
                    exact-active-class="selected"
                    class="sidebar__list--li"
                >
                    <svg class="icon">
                        <use href="opa" />
                    </svg>
                    Painel de Controle
                </router-link>
                <li class="sidebar__list--li disabled">
                    <svg class="icon">
                        <use href="opa" />
                    </svg>
                    Notificações
                </li>
            </ul>

            <ul class="sidebar__list">
                <h2>Área do Usuário</h2>
                <li class="sidebar__list--li disabled">
                    <svg class="icon">
                        <use href="opa" />
                    </svg>
                    Meu Perfil
                </li>
                <router-link
                    tag="li"
                    to="/dashboard/my-actions"
                    exact-active-class="selected"
                    class="sidebar__list--li"
                >
                    <svg class="icon">
                        <use href="opa" />
                    </svg>
                    Minhas Ações
                </router-link>
                <li class="sidebar__list--li disabled">
                    <svg class="icon">
                        <use href="opa" />
                    </svg>
                    Minhas Produções
                </li>

                <router-link
                    tag="li"
                    to="/dashboard/my-necessities"
                    exact-active-class="selected"
                    class="sidebar__list--li"
                >
                    <svg class="icon">
                        <use href="opa" />
                    </svg>
                    Minhas Necessidades
                </router-link>

                <li class="sidebar__list--li disabled">
                    <svg class="icon">
                        <use href="opa" />
                    </svg>
                    Locais
                </li>
            </ul>

            <ul class="sidebar__list">
                <h2>Administração</h2>
                <router-link
                    tag="li"
                    to="/dashboard/users"
                    exact-active-class="selected"
                    class="sidebar__list--li"
                >
                    <svg class="icon">
                        <use href="opa" />
                    </svg>
                    Usuários
                </router-link>

                <li class="sidebar__list--li disabled">
                    <svg class="icon">
                        <use href="opa" />
                    </svg>
                    Contato
                </li>
            </ul>
            <span class="logout">
                <a href="opa" >Sair</a>
            </span>
        </div>
    </div>


</>

);

export default Sidebar;



