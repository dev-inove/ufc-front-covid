/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
import React, { useState, useEffect } from "react";
import api from "../../services/api-back";
import { Form, Button, Col, Table } from "react-bootstrap";
import "../../pages/ListActions/style.scss";

const Formulario = () => {
  const [imgUrl, setImgUrl] = useState(null);

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [result, setResult] = useState("");

  const [fullName, setFullName] = useState("");
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [selectCategory, setSelectCategory] = useState({});
  const [category, setCategory] = useState({});

  const [newCategory, setNewCategory] = useState("");

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
    setImgUrl(null);
    setTitle("");
    setSubtitle("");
    setDescription("");
    setResult("");
    setFullName("");
    setInstitution("");
    setEmail("");
    setCategory("");
    setInitialDate("");
    setFinalDate("");
    setRefreshPage(!refreshPage);
  }

  async function submitAction(event) {
    event.preventDefault();

    try {
      const data = new FormData();

      const formatedDate = (date) => {
        const data = date.split("-");
        return `${data[2]}/${data[1]}/${data[0]}`;
      };

      console.log(formatedDate(initialDate));
      console.log(formatedDate(finalDate));

      data.append("file", imgUrl);
      data.append("fullName", fullName);
      data.append("email", email);
      data.append("institution", institution);
      data.append("category", category);
      data.append("title", title);
      data.append("subtitle", subtitle);
      data.append("initialDate", formatedDate(initialDate));
      data.append("finalDate", formatedDate(finalDate));
      data.append("description", description);
      data.append("result", result);

      // data.append("result", result);

      const res = await api.post("/actions", data);
      console.log(res);
      res.status === 200
        ? clean()
        : alert("Houve um problema, tente novamente :(");
    } catch (error) {
      alert("Houve um problema, tente novamente");
      console.log(error);
    }
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

  async function submitCategory(event) {
    event.preventDefault();

    const res = await api.post("/category", {
      name: newCategory,
    });
    console.log(res);
    res.status === 201 ? clean2() : alert("Houve um problema, tente novamente");
  }

  function clean2() {
    alert("Cadastrado com Sucesso");
    setNewCategory("");
    setRefreshPage(!refreshPage);
  }

  return (
    <>
      {/* <Header /> */}
      <div className="ActionsList">
        <div className="actions pad-sm">
          <div className="section-title">
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
