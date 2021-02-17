// import React, { useEffect, useState } from "react";
import React from "react";
// import api from "../../services/api-back";
import { Form, Button, Col, Table } from "react-bootstrap";

// import Header from "../components/Header/Navbar";
// import Footer from "../components/Footer";
import "../../pages/ListActions/style.scss";

const Formulario = () => {
  const a = () => console.log("aaa");
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
                <Form action="http://localhost:3333/actions" method="POST">
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
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        column="lg"
                        className="search__form-control form-control-lg"
                        type="text"
                        placeholder="Instituição"
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        column="lg"
                        className="search__form-control form-control-lg"
                        type="text"
                        placeholder="Email"
                      />
                    </Col>

                    <Col>
                      <Form.Control
                        column="lg"
                        className="search__form-control form-control-lg"
                        type="text"
                        placeholder="Categoria "
                      />
                    </Col>

                    <Col>
                      <Form.Control
                        column="lg"
                        className="search__form-control form-control-lg"
                        type="text"
                        placeholder="Titulo"
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        column="lg"
                        className="search__form-control form-control-lg"
                        type="text"
                        placeholder="Subtitulo"
                      />
                    </Col>
                    <Col>
                      <Form.Group
                        className="search__form-control form-control-lg"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Descrição</Form.Label>
                        <Form.Control as="textarea" rows={3} />
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
            <h1 className="section-title__main">Lista de cadastros</h1>
            <hr className="section-title__underline" />
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Nome</th>
                  <th>Instituição</th>
                  <th>Email</th>
                  <th>Categoria</th>
                  <th>Título</th>
                  <th>Subtitulo</th>
                  <th>Descrição</th>
                  <th>Editar</th>
                  <th>Deletar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>UFC</td>
                  <td>Mark@gmail.com</td>
                  <td>Otto</td>
                  <td>Titulo</td>
                  <td>Subtitulo</td>
                  <td>Descrição</td>
                  <td>
                    <Button variant="primary">Editar</Button>
                  </td>
                  <td>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Mark</td>
                  <td>UFC</td>
                  <td>Mark@gmail.com</td>
                  <td>Otto</td>
                  <td>Titulo</td>
                  <td>Subtitulo</td>
                  <td>Descrição</td>
                  <td>
                    <Button variant="primary">Editar</Button>
                  </td>
                  <td>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Mark</td>
                  <td>UFC</td>
                  <td>Mark@gmail.com</td>
                  <td>Otto</td>
                  <td>Titulo</td>
                  <td>Subtitulo</td>
                  <td>Descrição</td>
                  <td>
                    <Button onClick={a} variant="primary">
                      Editar
                    </Button>
                  </td>
                  <td>
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Formulario;
