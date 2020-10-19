import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/svg/logopurple.svg";

import "./styles/navbar.scss";
const Navbar = () => (
  <>
    <nav className="navbar pad-sm">
      <img src={Logo} alt="logo-combate-ao-covid-19" />

      <ul className="navbar__list">
        <li className="active">
          <Link to="/" className="navbar_link">
            Home
          </Link>
        </li>

        <li>
          <Link to="/list-actions" className="navbar_link">
            Ações
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
        <button href="">Cadastrar</button>
      </div>
    </nav>
  </>
);
export default Navbar;
