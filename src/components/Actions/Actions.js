import React, { useState, useEffect } from "react";

import api from "../../services/api-back";

import Carousel from "react-elastic-carousel";
import SectionTitle from "../utils/SectionTitle.js";
import ActionCard from "./ActionCard.js";
import Mask from "../../assets/img/covid-mask.jpg";
import "./style.scss";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const Actions = () => {
  const [actions, setActions] = useState([]);
  // const [allActions, setAllActions] = useState([]);

  const getActions = async () => {
    const { data } = await api.get("/actions");
    // console.log(data);
    let length = data.actions.length >= 4 ? 4 : data.actions.length;
    let aux = [];

    for (let i = 0; i < length; i++) {
      aux.push(data.actions[i]);
    }

    // console.log("data", data.actions);
    // console.log("aux", aux);

    setActions(aux);

    // return data;
  };
  useEffect(() => {
    getActions();
  }, []);

  return (
    <>
      <div className="actions pad-sm">
        <SectionTitle
          title="Nossas Ações"
          sub="Seção destinada as ações realizadas pela UFC e por pessoas
            externas para
            com o enfrentamento aos danos causados pelo novo
            coronavírus (COVID-19)"
        />
      </div>
      <div className="carouel">
        <Carousel breakPoints={breakPoints}>
          {/* AS IMAGENS DEVEM ESTAR EM 1920/1080 PARA O BOM FUNCIONAMENTO SEM MAIS ALTERAÇÕES NO ESTILO DO COMPONENTE*/}

          {actions &&
            actions.map((e) => (
              <ActionCard
                key={e._id}
                image={e.url}
                title={e.title}
                sub={e.subtitle}
                titleReplaced={e.title.replace(/ /g, "_")}
              />
            ))}

          {/* <ActionCard
            image={Mask}
            title="Confecções de Máscaras"
            sub="Produção de máscaras descartáveis e outras substâncias essenciais para a atual crise viral"
          />
           */}
        </Carousel>
      </div>
    </>
  );
};

export default Actions;
