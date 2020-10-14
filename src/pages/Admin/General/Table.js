import React from 'react';
import './style.scss'
const Table = () => (
<>

<table class="table">
        <tr class="title-row">
            <th> title </th>
        </tr>
        <tr>
            <td>field </td>
            <td>
                <svg class="icon edit">
                    <use href="opa" />
                </svg>
            </td>
            <td>
                <svg class="icon delete">
                    <use href="opa" />
                </svg>
            </td>
        </tr>
    </table>


</>

);

export default Table;

