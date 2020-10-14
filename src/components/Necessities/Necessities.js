import React from 'react';

import SectionTitle from '../utils/SectionTitle.js'
import NecessityCard from './NecessityCard.js'
import './style.scss'
import Material3D from '../../assets/img/material3d-cover.png'
import Acetate from '../../assets/img/acetate.jpg'
import Elastic from '../../assets/img/elastic.jpg'

const Necessities = () => (
<>
<div className="necessities pad-sm" id="necessity">
        <SectionTitle title="Nossas Necessidades" sub=" Seção destinada aos materiais, produtos, serviços ou insumos
            necessários
          para que as ações sejam feitas." />
           
            <div className="card-space" >
                <NecessityCard  img={Material3D} title="Filamento para impressão 3D" />
                <NecessityCard  img={Acetate} title="Folhas de acetato" />
                <NecessityCard  img={Elastic} title="Ligas Elásticas de Látex" />
            </div>
    </div>


</>

);

export default Necessities;




