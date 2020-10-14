import React from 'react';

import AdminPageTitle from '../General/AdminPageTitle'
import ActionButton from '../General/ActionButton'
import Table from '../General/Table'
import './style.scss'
const MyActions= () => (
<>

  <div class="my-actions">
        <div class="my-actions__header">
            <AdminPageTitle > pageSub </AdminPageTitle>
            <ActionButton  title="Adicionar" />
        </div>

    
        <div class="my-actions__list"
        >
            <svg class="my-actions__list--no-data-icon">
                <use href="opa" />
            </svg>
            <Table />
        </div>

  
        <div class="my-actions__content" >

            <div class="my-actions__content--step">
                <label for="title">Titulo da ação</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Ex: Confecção de máscaras"
                   
                />

                <label for="subtitle">Subtítulo</label>
                <input
                    type="text"
                    id="subtitle"
                    placeholder="Ex: Postos de saúde precisam de máscaras"
                   
                />

                <label>Conteúdo</label>
                
            </div>

            <div  class="my-actions__content--step">
                <label for="imageUrl">URL da Imagem</label>
                <input
                    type="text"
                    id="imageUrl"
                    placeholder="Informe a URL da imagem do artigo..."
                />
            </div>

            <div class="my-actions__bottom-container">
                <ActionButton/>
                <ActionButton />
            </div>
        </div>
    </div>



</>

);

export default MyActions;

