import React from 'react';
import "./style.scss";
import SectionTitle from '../utils/SectionTitle.js'

import Carousel from "react-elastic-carousel";
import ActionCard from './ActionCard.js'

import Mask from '../../assets/img/covid-mask.jpg'
 
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3},
    { width: 1200, itemsToShow: 3}
  ];

const Actions = () => (
      
<>
<div className="actions pad-sm">
        <SectionTitle title="Nossas Ações" sub="Seção destinada as ações realizadas pela UFC e por pessoas
            externas para
            com o enfrentamento aos danos causados pelo novo
            coronavírus (COVID-19)"/> 
            
            </div>
            <div className="carouel">
        <Carousel breakPoints={breakPoints} >
             
             {/* AS IMAGENS DEVEM ESTAR EM 1920/1080 PARA O BOM FUNCIONAMENTO SEM MAIS ALTERAÇÕES NO ESTILO DO COMPONENTE*/}

            <ActionCard image={Mask} title="Confecções de Máscaras" sub="Produção de máscaras descartáveis e outras substâncias essenciais para a atual crise viral"/>
            <ActionCard image={Mask} title="Confecções de Máscaras" sub="Produção de máscaras descartáveis e outras substâncias essenciais para a atual crise viral"/>
            <ActionCard image={Mask} title="Confecções de Máscaras" sub="Produção de máscaras descartáveis e outras substâncias essenciais para a atual crise viral"/>
            <ActionCard image={Mask} title="Confecções de Máscaras" sub="Produção de máscaras descartáveis e outras substâncias essenciais para a atual crise viral"/>


        </Carousel>
        </div>


           

    
  

</>

);

export default Actions;




