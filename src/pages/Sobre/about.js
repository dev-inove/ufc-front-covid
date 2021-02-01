// import React, { useEffect, useState } from "react";
import React from "react";
// import api from "../../services/api-back";

import Img1 from "../../assets/img/covid-mask.jpg";
import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer";
import ListActionCard from "../../components/Actions/CardListaAbout/ListActionCard";
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
        <div className="actions pad-sm">
          <div className="Card-List">
            <ListActionCard
              image={Img1}
              title="Confecções de Máscaras"
              sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."
            />
            <ListActionCard
              image={Img1}
              title="Confecções de Máscaras"
              sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."
            />
            <ListActionCard
              image={Img1}
              title="Confecções de Máscaras"
              sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."
            />
            <ListActionCard
              image={Img1}
              title="Confecções de Máscaras"
              sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."
            />
        <div className="section-title">
            <h1 className="section-title__main">Desenvolvedores</h1>
            <hr className="section-title__underline" />
          </div>
            <ListActionCard
              image={Img1}
              title="Confecções de Máscaras"
              sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."
            />
            <ListActionCard
              image={Img1}
              title="Confecções de Máscaras"
              sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."
            />
            <ListActionCard
              image={Img1}
              title="Confecções de Máscaras"
              sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."
            />
            <ListActionCard
              image={Img1}
              title="Confecções de Máscaras"
              sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."
            />

            <ListActionCard
              image={Img1}
              title="Confecções de Máscaras"
              sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListActions;
