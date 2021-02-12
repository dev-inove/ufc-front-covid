/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import * as S from "./styles.js";

import AdminPageTitle from "../General/AdminPageTitle";
import ActionButton from "../General/ActionButton";
import Table from "../General/Table";
import "./style.scss";
const MyActions = () => {
  const [title, setTitle] = useState();

  useEffect(() => {
    console.log(title);
  }, [title]);

  return (
    <>
      <form>
        <div class="my-actions__content">
          <div class="my-actions__content--step">
            <S.Container />
            <label for="title">Titulo da ação</label>
            <input
              type="text"
              id="title"
              placeholder="Ex: Confecção de máscaras"
              onKeyPress={(e) => setTitle(e.target.value)}
            />

            <label for="subtitle">Subtítulo</label>
            <input
              type="text"
              id="subtitle"
              placeholder="Ex: Postos de saúde precisam de máscaras"
            />
          </div>
          <h1>Álvaro</h1>
        </div>
      </form>
    </>
  );
};

export default MyActions;

// <div class="my-actions">
//       <div class="my-actions__header">
//         <AdminPageTitle> pageSub </AdminPageTitle>
//         <ActionButton title="Adicionar" />
//       </div>

//       <div class="my-actions__list">
//         <svg class="my-actions__list--no-data-icon">
//           <use href="opa" />
//         </svg>
//         <Table />
//       </div>

//       <div class="my-actions__content">
//         <div class="my-actions__content--step">
//           <label for="title">Titulo da ação</label>
//           <input
//             type="text"
//             id="title"
//             placeholder="Ex: Confecção de máscaras"
//           />

//           <label for="subtitle">Subtítulo</label>
//           <input
//             type="text"
//             id="subtitle"
//             placeholder="Ex: Postos de saúde precisam de máscaras"
//           />

//           <label>Conteúdo</label>
//         </div>

//         <div class="my-actions__content--step">
//           <label for="imageUrl">URL da Imagem</label>
//           <input
//             type="text"
//             id="imageUrl"
//             placeholder="Informe a URL da imagem do artigo..."
//           />
//         </div>

//         <div class="my-actions__bottom-container">
//           <ActionButton />
//           <ActionButton />
//         </div>
//       </div>
//     </div>
