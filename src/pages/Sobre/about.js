// import React, { useEffect, useState } from "react";
import React from "react";
// import api from "../../services/api-back";

import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer";
import "./style.scss";

const ListActions = () => {
  return (
    <>
      <Header />
      <div className="ActionsList">
        <div className="actions pad-sm">
          <div className="section-title">
            <h1 className="section-title__main">Sobre</h1>
            <hr className="section-title__underline" />
            Pequena descrição da equipe
          </div>
          <div className="section-title">
            <h1 className="section-title__main">Gestão</h1>
            <hr className="section-title__underline" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListActions;
