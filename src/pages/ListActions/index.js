// import React, { useEffect, useState } from "react";
import React, { useState, useEffect } from "react";
// import api from "../../services/api-back";
import { Form, Button, Col } from "react-bootstrap";
import api from "../../services/api-back";

// import Img1 from "../../assets/img/covid-mask.jpg";
import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer";
import ListActionCard from "../../components/Actions/CardList/ListActionCard.js";
import "./style.scss";

const ListActions = () => {
  const [selectCategory, setSelectCategory] = useState({});
  // const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");

  const [actions, setActions] = useState([]);
  const [allActions, setAllActions] = useState([]);

  const getActions = async () => {
    const { data } = await api.get("/actions");
    // console.log(data);

    setActions(data.actions);
    setAllActions(data.actions);
    // return data;
  };

  async function submitTitle(event) {
    event.preventDefault();

    const res = await api.get(`/action?title=${title}`);
    console.log(res);
    res.status === 200
      ? alert("Buscado com sucessor")
      : alert("Houve um problema, tente novamente");

    setActions(res.data.action);
  }

  const handleCategory = (cat) => {
    const aux = allActions.filter((action) => {
      return action.categoryName === cat;
    });

    // console.log("auxxx", aux);
    setActions(aux);
  };

  const handleCampus = (institution) => {
    const aux = allActions.filter((action) => {
      return action.institution === institution;
    });

    // console.log("auxxx", aux);
    setActions(aux);
  };

  const getCategories = async () => {
    const { data } = await api.get("/categories");
    setSelectCategory(data);
    // return data;
  };
  useEffect(() => {
    getCategories();
    getActions();
  }, []);

  // console.log("Alvaro ia dfdf".replace(/ /g, "_"));

  return (
    <>
      <Header />
      <div className="ActionsList">
        <div className="actions pad-sm">
          <div className="section-title">
            <h1 className="section-title__main">Ações</h1>
            <hr className="section-title__underline" />
            <div className="search">
              <div className="search__selector">
                <Form.Control
                  as="select"
                  className="search__select"
                  onChange={(e) => {
                    handleCampus(e.target.value);
                  }}
                >
                  <option className="op"> Selecione Campus</option>
                  <option className="op">Campus Pici</option>
                  <option className="op">Campus Quixadá</option>
                  <option className="op">Campus Sobral</option>
                  <option className="op">Campus Benfica</option>
                </Form.Control>

                <Form.Control
                  as="select"
                  className="search__select"
                  onChange={(e) => {
                    // console.log(e.target.value);
                    handleCategory(e.target.value);
                  }}
                >
                  <option className="op"> Selecione Categoria</option>
                  {selectCategory.categories !== undefined ? (
                    selectCategory.categories.map((e) => {
                      return <option key={e._id}>{e.name}</option>;
                    })
                  ) : (
                    <option>Cadastre alguma categoria</option>
                  )}
                </Form.Control>
              </div>

              <div className="search__page-form">
                <Form onSubmit={submitTitle}>
                  <Form.Row>
                    <Col>
                      <Form.Control
                        column="lg"
                        className="search__form-control form-control-lg"
                        type="text"
                        placeholder="Pesquisar Ações"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Button
                        size="lg"
                        className="search__page-btn"
                        type="submit"
                      >
                        Pesquisar
                      </Button>
                    </Col>
                  </Form.Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="actions pad-sm">
          <div className="Card-List">
            {actions !== undefined &&
              actions.map((action) => {
                return (
                  <ListActionCard
                    key={action._id}
                    image={action.url}
                    title={action.title}
                    sub={action.subtitle}
                    titleReplaced={action.title.replace(/ /g, "_")}
                  />
                );
              })}
            {/* <ListActionCard
              image={Img1}
              title="Confecções de Máscaras"
              sub=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            excepturi, saepe vel quo molestias pariatur deserunt sed ipsum
            quasi quas ducimus voluptates cum. Sequi odio impedit quae
            nihil nam ea."
            /> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListActions;
