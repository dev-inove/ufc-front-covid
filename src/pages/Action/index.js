// import React, { useEffect, useState } from "react";
// import api from "../../services/api-back";
import React, { useState, useEffect } from "react";

import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer";
import { Image } from "react-bootstrap";
import Img1 from "../../assets/img/covid-mask.jpg";
import api from "../../services/api-back";

import { useParams } from "react-router-dom";
import "./style.scss";

export default function Action() {
  const [action, setAction] = useState({});

  const { title } = useParams();
  useEffect(() => {
    async function load() {
      const res = await api.get(`/action?title=${title}`);
      console.log(res.data.action[0]);
      res.status !== 200 && alert("Houve um problema, tente novamente");

      setAction(res.data.action[0]);
    }
    load();
  }, []);

  // const [email, setEmail] = useState("");
  // const [action, setAction] = useState([]);

  // async function submitt(e) {
  //   e.preventDefault();

  //   const { data } = await api.get(`/action?title=${email}`);

  //   setAction(data.action);
  // }

  return (
    <>
      <Header />
      <div className="Page">
        <div className="page-header">
          <h1>
            {action.title ||
              "Title super foda e que vai mudar o mundo muito doido mano"}
          </h1>
          <div className="page-header-infos">
            <p>Data: 12/17/1998</p>
            <p>By: {action.fullName || "Alvim Maroto"}</p>
          </div>
          <div className="page-header-img">
            <Image src={action.url || Img1} thumbnail />
          </div>
        </div>
        <div className="text-description">
          <p>{action.subtitle || "Esse é o texto da descrição. "}</p>
        </div>
        <div className="text-content">
          <p>{action.description || "Esse é o texto da ação em si."}</p>
        </div>
        {action.result && (
          <>
            <div className="text-content">
              <h3>Resultados</h3>
            </div>

            <div className="text-content">
              <p>{action.result || "Esse é o texto do resultado"}</p>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
