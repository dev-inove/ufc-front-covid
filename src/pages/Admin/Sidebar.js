import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <>
    <div class="sidebar">
      {/* <img src="opa" alt="logo-combate-covid" /> */}
      <div class="list__area">
        {/* <ul class="sidebar__list">
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
        </ul> */}

        <ul class="sidebar__list">
          <h2>Área do Usuário</h2>

          {/* <router-link
            tag="li"
            to="/my"
            exact-active-class="selected"
            class="sidebar__list--li"
          >
            <svg class="icon">
              <use href="opa" />
            </svg>
            Minhas Ações
          </router-link> */}
          <li class="sidebar__list--li">
            <Link to="/cadastrar" style={{ color: "#000000" }}>
              <svg class="icon">
                <use />
              </svg>
              Minhas Ações
            </Link>
          </li>
        </ul>
        <span class="logout">
          <a href="opa">Sair</a>
        </span>
      </div>
    </div>
  </>
);

export default Sidebar;
