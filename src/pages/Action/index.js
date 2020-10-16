import React, { useEffect, useState } from "react";
import api from "../../services/api-back";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Navbar";
import "./style.scss";

export default function Action() {
  useEffect(() => {
    // async function load() {
    //   const { data } = await api.post("/sessions", {
    //     email: "bianor.alvaro12@gmail.com",
    //     password: "Alvim",
    //   });
    //   console.log(data);
    // }
    // load();
  }, []);

  const [email, setEmail] = useState("");
  const [action, setAction] = useState([]);

  async function submitt(e) {
    e.preventDefault();

    const { data } = await api.get(`/action?title=${email}`);

    setAction(data.action);
  }

  return (
    <>
      <Header />
      <div className="searchBar">
        <button>
          <Link to="/" className="nothing">
            Vaaaai
          </Link>
        </button>
        <br />

        <form onSubmit={submitt}>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button type="submit">Go</button>
        </form>
      </div>

      <div className="alvaro">
        {action.map((data, i) => {
          return <p key={i}>{data.title}</p>;
        })}
      </div>
    </>
  );
}
