import React from 'react';
import Foto1 from '../../assets/img/call-to-action-coverEffect.jpg';
import "./style.scss";


const CallToAction = () => (
<>
<div className="call-to-action"  id="necessits">
      
        <img
            id="call-to-action-img"
            src={Foto1}
            alt="call-to-action-cover"
        />
        <h2>
            Precisamos de sua ajuda para combater esse vírus, juntos
            <br />somos mais fortes.
        </h2>
        <button>Envie sua ação de combate ao covid-19</button>
    </div>

</>

);

export default CallToAction;








