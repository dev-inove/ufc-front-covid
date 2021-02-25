import React, { useEffect, useState } from "react";
import Box from "./Box";
import "./styles/banner.scss";
import api from "../../services/api";

const Banner = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const {
        data: { data },
      } = await api.get("");
      setData(data.filter((e) => e.uf === "CE")[0]);
    } catch (e) {
      setData({
        cases: 415664,
        deaths: 11087,
        refuses: 89,
        state: "Ceará",
        suspects: 493,
        uf: "CE",
      });
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return (
    <>
      <header className="header" id="home">
        <div className="header__title pad-sm">
          <h1>
            UFC Contra
            <br />o Coronavírus
          </h1>
          <h2>
            Confira os principais destaques quanto as ações promovidas pela UFC
            em combate ao Coronavírus no estado do Ceará.
          </h2>
        </div>

        <div id="actions"></div>

        <div className="header__info">
          <Box title="Confirmados" num={data.cases} />
          <Box title="Recuperados" num={data.refuses} />
          <Box title="Mortes" num={data.deaths} />
        </div>
      </header>
    </>
  );
};
export default Banner;
