import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";

const Sidebar = () => {
  const { signOut } = useAuth();
  return (
    <>
      <div class="sidebar">
        <div class="list__area">
          <span class="logout">
            <a href="/">Home</a>
          </span>
          <ul class="sidebar__list">
            <h2>Área do Usuário</h2>

            <li class="sidebar__list--li">
              <Link to="/cadastrar_action" style={{ color: "#000000" }}>
                <svg class="icon">
                  <use />
                </svg>
                Cadastrar Ações
              </Link>
            </li>
            <li class="sidebar__list--li">
              <Link to="/list_all_actions" style={{ color: "#000000" }}>
                <svg class="icon">
                  <use />
                </svg>
                Minhas Ações
              </Link>
            </li>
            <li class="sidebar__list--li">
              <Link to="/cadastrar_category" style={{ color: "#000000" }}>
                <svg class="icon">
                  <use />
                </svg>
                Cadastrar Categorias
              </Link>
            </li>
          </ul>
          <span class="logout">
            <a
              href="/"
              onClick={() => {
                console.log("Foi");
                signOut();
              }}
            >
              Sair
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
