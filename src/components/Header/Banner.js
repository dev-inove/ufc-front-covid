import React from 'react';
import Box from './Box'
import "./styles/banner.scss";
const Banner = () => (
<>
<header className="header" id="home">
        <div className="header__title pad-sm">
            <h1>
                UFC Contra
                <br />o Coronavírus
            </h1>
            <h2>
                Confira os principais destaques quanto as ações promovidas
                pela UFC em combate ao Coronavírus no estado do Ceará.
            </h2>
        </div>
        
        <div  id="actions"></div>

        <div className="header__info">
            <Box title="Confirmados" num="259764"  />
            <Box title="Recuperados" num="89" />
            <Box title="Mortes" num="9130" />
        </div>
    </header>
</>
);
export default Banner; 