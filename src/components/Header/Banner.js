import React, { useEffect, useState } from "react";
import Box from "./Box";
import "./styles/banner.scss";
import api from "../../services/api-back";

const Banner = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const { data } = await api.get("/infos");
      setData(data);
    } catch (e) {
      alert("Inconsistência dos dados");
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

        <div className="header__info">
          <Box title="Categorias" num={data.allCategories} />
          <Box title="Ações" num={data.allActions} />
          <Box title="Ações Concluídas" num={data.actionsDone} />
        </div>
      </header>
    </>
  );
};
export default Banner;
