import React from 'react';

import "./footer.scss";
import LogoH from "../../assets/img/logo_ufc_horizontal.png";

const Footer = () => (
<>

<footer className="footer pad-sm" id="footer">
        <div className="footer__info">
            <img className="footer__logo"src={LogoH} alt="ufc-logo"/>
          
            <div className="footer__social">
                Midias Sociais
                <hr />
                <svg className="footer__social--icon">
                    <use href="insta"/>
                </svg>
                <svg className="footer__social--icon">
                    <use href="face"/>
                </svg>
                <svg className="footer__social--icon">
                    <use href="yot" />
                </svg>
                <svg className="footer__social--icon">
                    <use href="twiter"  />
                </svg>
            </div>
            <div className="footer__legal">
                ©2020 - Universidade Federal do Ceará
                <br />Todos os direitos reservados.
            </div>
        </div>

        <div className="footer__contact">
            <div className="footer__contact--title">
                <h1>Campi Name</h1>
                <svg className="right-arrow">
                    <use href="rig" />
                </svg>
            </div>

            <div className="footer__contact--campus-info">
                <div className="footer__contact--campus-info--icon-box">
                    <svg className="footer__contact--campus-info--icon">
                        <use href="in" />
                    </svg>
                </div>
                <div className="footer__contact--campus-info--text">
                    <h2>Local</h2>
                    Endereço
                </div>
            </div>

            <div className="footer__contact--campus-info">
                <div className="footer__contact--campus-info--icon-box">
                    <svg className="footer__contact--campus-info--icon">
                        <use href="pin "/>
                    </svg>
                </div>
                <div className="footer__contact--campus-info--text">
                    <h2>Telefone</h2>
                   Telefone
                </div>
            </div>
            <div className="footer__contact--campus-info">
                <div className="footer__contact--campus-info--icon-box">
                    <svg className="footer__contact--campus-info--icon">
                        <use href="clock" />
                    </svg>
                </div>
                <div className="footer__contact--campus-info--text">
                    <h2>Horário</h2>08:00h - 22:00h
                </div>
            </div>
        </div>
    </footer>

</>

);

export default Footer;