/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./style.scss";
import SectionTitle from "../../components/utils/SectionTitle";
import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer";
import Call from "../../components/CalltoAction/CallToAction";
import { Link, useHistory } from "react-router-dom";
import api from "../../services/api-back";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function submitAction(event) {
    event.preventDefault();

    console.log(email, password);

    const { data } = await api.post("/sessions", {
      email,
      password,
    });
    console.log(data);

    localStorage.setItem("token", data.token);

    data.token ? history.push("/") : alert("Erro no login");
  }
  return (
    <>
      <Header />
      <div class="auth">
        <div class="auth__login">
          <SectionTitle title="Login">
            Faça login para gerenciar ações.
          </SectionTitle>

          <div>
            <input
              class="auth__login--email"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <svg class="input-icon email">
              <use href="opa" />
            </svg>

            <input
              class="auth__login--password"
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <svg class="input-icon password">
              <use href="opa" />
            </svg>

            <div class="login-options">
              <span class="remember-me">
                <input type="checkbox" name="remember-me" id="remember-me" />
                <label for="remember-me">Lembrar de mim</label>
              </span>

              <span class="forgot-password">Esqueci minha senha</span>
            </div>

            <button onClick={submitAction}> Entrar</button>
          </div>
        </div>
      </div>
      <Call />
      <Footer />
    </>
  );
};

export default Login;
