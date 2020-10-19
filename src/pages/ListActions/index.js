// import React, { useEffect, useState } from "react";
import React from "react";
// import api from "../../services/api-back";
import { Form, Button, Col } from "react-bootstrap";

import Img1 from "../../assets/img/covid-mask.jpg";
import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer";
import ListActionCard from '../../components/Actions/CardList/ListActionCard.js'
import "./style.scss";

const ListActions = () => {
  return (
    <>
      <Header />
     <div className="ActionsList">
    
     <div className="actions pad-sm">
        <div className="section-title" >
                <h1 className="section-title__main">Ações</h1>
                <hr className="section-title__underline" />
                <div className="search">
                <div className="search__selector">
            <Form.Control as="select" className="search__select">
              <option className="op"> Select Category</option>
              <option className="op">Cat2</option>
              <option className="op">Cat3</option>
              <option className="op">Cat4</option>
              <option className="op">Cat5</option>
            </Form.Control>
          </div>

<div className="search__page-form">
          <Form>
            <Form.Row>
              <Col>
                <Form.Control
                  column="lg"
                  className="search__form-control form-control-lg"
                  type="text"
                  placeholder="Pesquisar Ações"
                />
              </Col>
              <Col>
                <Button size="lg" className="search__page-btn" type="submit">
                  Pesquisar
                </Button>
              </Col>
            </Form.Row>
          </Form>

         
          </div></div>
         
          </div>
        </div>
        <div className="actions pad-sm">
            <div className="Card-List">
             
            <ListActionCard image={Img1} title="Confecções de Máscaras" sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."/>
             <ListActionCard image={Img1} title="Confecções de Máscaras" sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."/>
             <ListActionCard image={Img1} title="Confecções de Máscaras" sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."/>
             <ListActionCard image={Img1} title="Confecções de Máscaras" sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."/>
            
            <ListActionCard image={Img1} title="Confecções de Máscaras" sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."/>
             <ListActionCard image={Img1} title="Confecções de Máscaras" sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."/>
             <ListActionCard image={Img1} title="Confecções de Máscaras" sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."/>
             <ListActionCard image={Img1} title="Confecções de Máscaras" sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."/>
            
            <ListActionCard image={Img1} title="Confecções de Máscaras" sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."/>
          
       
       
      
      </div>
      </div></div>
        <Footer />
      
    </>
  );
};

export default ListActions;
