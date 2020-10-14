import React from 'react';

import Logo from '../../assets/svg/logopurple.svg';


import "./styles/navbar.scss";
const Navbar = () => (
<>

    <nav className="navbar pad-sm" >
        
        <img  src={Logo} alt="logo-combate-ao-covid-19" />


        <ul className="navbar__list">
            <li className="active"><a href="#home" className="navbar_link">Home</a></li>
            <li><a href="#actions" className="navbar_link"> Ações</a> </li>
            {/* <li><a href="#productions" className="navbar_link">Produções</a></li>
            <li><a href="#necessity" className="navbar_link">Necessidades</a></li> */}
            <li><a href="#footer" className="navbar_link">Contatos</a></li>
        </ul>
        <div className="navbar__actions">
            <a href="opa">Cadastrar</a>
            
            <button href="/login">Login</button>
            
        </div>

  
    </nav>


</>
);
export default Navbar; 