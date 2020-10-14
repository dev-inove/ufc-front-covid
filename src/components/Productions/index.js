import React from 'react';

import './style.scss'
import Carousel from "react-elastic-carousel";

import SectionTitle from '../utils/SectionTitle.js'

import Graph from '../../assets/img/prodRecorrent.png'
import ProductionsCard from './productionCard';


 
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4},
    { width: 1200, itemsToShow: 4}
  ];
const Productions = () => (
<>

    <div className="productions pad-sm" id="productions">
        <SectionTitle title="Produções em Números" sub=" Seção destinada aos resultados numéricos de todos os produtos
            que foram ou estão
            sendo produzidos para distribuição da população" />
</div>
            <Carousel breakPoints={breakPoints}>
                 <ProductionsCard img={Graph} title="Produção recorrente" />
                 <ProductionsCard img={Graph} title="Produção recorrente" />
                 <ProductionsCard img={Graph} title="Produção recorrente" />
                 <ProductionsCard img={Graph} title="Produção recorrente" />
                 <ProductionsCard img={Graph} title="Produção recorrente" />
                 <ProductionsCard img={Graph} title="Produção recorrente" />
    
            </Carousel>



    
</>

);

export default Productions;