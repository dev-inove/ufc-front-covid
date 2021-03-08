import React, { useEffect, useState } from "react";
import "../../pages/ListActions/style.scss";
import { Form, Button, Col, Table } from "react-bootstrap";

import api from "../../services/api-back";

const TableInfos = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    try {
      const { data } = await api.get("/category-infos");
      // console.log("hehehe", data);

      setData(data);
    } catch (e) {
      alert("Inconsistência dos dados");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  // console.log("hehehe2", data);

  return (
    <>
      <div className="ActionsList">
        <div className="actions pad-sm">
          <div className="section-title">
            {data !== undefined && (
              <div>
                <h1 className="section-title__main">UFC em números</h1>
                <hr className="section-title__underline" />
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Categoria</th>
                      <th>Número de ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data[0] !== undefined &&
                      data.map((e, index) => (
                        <tr key={index}>
                          <td>{e.name}</td>
                          <td>{e.numberActions}</td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default TableInfos;
