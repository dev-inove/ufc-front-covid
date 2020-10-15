import React from "react";
import { Link } from "react-router-dom";
export default function Action() {
  return (
    <>
      <h1>Alvaro Bianor</h1>
      <h2>Sousa Medeiros</h2>

      <button>
        <Link to="/" className="nothing">
          Vaaaai
        </Link>
      </button>
    </>
  );
}
