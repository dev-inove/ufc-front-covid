import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/svg/logopurple.svg";
import { useAuth } from "../../hooks";

import "./styles/navbar.scss";
const Navbar = () => {
  const {
    data: { token },
  } = useAuth();

  // console.log("Totoal", token);

  return (
    <>
      <nav className="navbar pad-sm">
        <img src={Logo} alt="logo-combate-ao-covid-19" />

        <ul className="navbar__list">
          <li className="active">
            <Link to="/" className="navbar_link">
              Inicio
            </Link>
          </li>

          <li>
            <Link to="/list-actions" className="navbar_link">
              Ações
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar_link">
              Sobre
            </Link>
          </li>
          {/* <li><a href="#productions" className="navbar_link">Produções</a></li>
            <li><a href="#necessity" className="navbar_link">Necessidades</a></li> */}
          <li>
            <a href="#footer" className="navbar_link">
              Contatos
            </a>
          </li>
        </ul>
        <div className="navbar__actions">
          {!token ? (
            <Link to="/login">
              <button>Login</button>
            </Link>
          ) : (
            <Link to="/adm">
              <button>Área logada</button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
