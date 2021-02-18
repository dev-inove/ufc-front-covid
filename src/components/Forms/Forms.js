/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
import React, { useState, useEffect } from "react";
import api from "../../services/api-back";
import { Form, Button, Col, Table } from "react-bootstrap";
import "../../pages/ListActions/style.scss";

const Formulario = () => {
  const [imgUrl, setImgUrl] = useState("");

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");

  const [fullName, setFullName] = useState("");
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [selectCategory, setSelectCategory] = useState({});
  const [category, setCategory] = useState({});

  const [initialDate, setInitialDate] = useState("");
  const [finalDate, setFinalDate] = useState("");

  const [actions, setActions] = useState({});

  const [refreshPage, setRefreshPage] = useState("");

  const getCategories = async () => {
    const { data } = await api.get("/categories");
    setSelectCategory(data);
    // return data;
  };

  const getActions = async () => {
    const { data } = await api.get("/actions");

    setActions(data);
    // return data;
  };

  useEffect(() => {
    getCategories();
    getActions();
  }, [refreshPage]);

  function clean() {
    alert("Cadastrado com Sucesso");
    setTitle("");
    setSubtitle("");
    setDescription("");
    setFullName("");
    setInstitution("");
    setEmail("");
    setCategory("");
    setRefreshPage(!refreshPage);
  }

  async function submitAction(event) {
    event.preventDefault();

    const res = await api.post("/actions", {
      fullName,
      institution,
      email,
      category,
      title,
      subtitle,
      description,
    });
    res.status === 200 ? clean() : alert("Houve um problema, tente novamente");
  }

  const refresh = () => {
    alert("Deletado com sucesso");
    setRefreshPage(!refreshPage);
  };

  const destroy = async (title) => {
    // console.log("entrou");
    const result = await api.delete(`/actions?title=${title}`);

    result.status === 200 ? refresh() : alert("Deu erro");
  };

  return (
    <>
      {/* <Header /> */}
      <div className="ActionsList">
        <div className="actions pad-sm">
          <div className="section-title">
            <h1 className="section-title__main">Cadastro</h1>
            <hr className="section-title__underline" />
            <div className="search">
              <div className="search__page-form">
                <Form onSubmit={submitAction}>
                  <Form.Row>
                    <Col>
                      <Form.Group className="search__form-control form-control-lg">
                        <Form.File
                          id="exampleFormControlFile1"
                          label="Upload de arquivo"
                        />
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Control
                        column="lg"
                        className="search__form-control form-control-lg"
                        type="text"
                        placeholder="Nome"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        column="lg"
                        className="search__form-control form-control-lg"
                        type="text"
                        placeholder="Instituição"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        column="lg"
                        className="search__form-control form-control-lg"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Col>

                    {/* <Col>
                      <Form.Control
                        column="lg"
                        className="search__form-control form-control-lg"
                        type="text"
                        placeholder="Categoria"
                        value={selectCategory}
                        onChange={(e) => setSelectCategory(e.target.value)}
                      />
                    </Col> */}

                    <Col>
                      <Form.Control
                        column="lg"
                        className="search__form-control form-control-lg"
                        type="text"
                        placeholder="Titulo"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </Col>

                    <Col>
                      <Form.Control
                        column="lg"
                        className="search__form-control form-control-lg"
                        type="text"
                        placeholder="Subtitulo"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <div class="form-group">
                        <label>Categoria</label>
                        <select
                          class="form-control"
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option>Selecione uma categoria</option>
                          {selectCategory.categories !== undefined ? (
                            selectCategory.categories.map((e) => {
                              return <option key={e._id}>{e.name}</option>;
                            })
                          ) : (
                            <option>Cadastre alguma categoria</option>
                          )}
                        </select>
                      </div>
                    </Col>
                    <Col>
                      <Form.Group
                        className="search__form-control form-control-lg"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={30}
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Button
                        size="lg"
                        className="search__page-btn"
                        type="submit"
                      >
                        Cadastar
                      </Button>
                    </Col>
                  </Form.Row>
                </Form>
              </div>
            </div>
            {actions.actions !== undefined && (
              <div>
                <h1 className="section-title__main">Lista de cadastros</h1>
                <hr className="section-title__underline" />
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>Título</th>
                      <th>Subtitulo</th>
                      <th>Categoria</th>
                      <th>Nome</th>
                      <th>Instituição</th>
                      <th>Email</th>
                      <th>Editar</th>
                      <th>Deletar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {actions.actions.map((e, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{e.title}</td>
                        <td>{e.subtitle}</td>
                        <td>{e.categoryName || "Teste"}</td>
                        <td>{e.fullName}</td>
                        <td>{e.institution}</td>
                        <td>{e.email}</td>
                        <td>
                          <Button variant="primary">Editar</Button>
                        </td>
                        <td>
                          <Button
                            variant="danger"
                            onClick={() => destroy(e.title)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Formulario;
