import React from "react";
import "./style.scss";
import SectionTitle from "../../components/utils/SectionTitle";
import Header from "../../components/Header/Navbar";
import Footer from "../../components/Footer";
import Call from "../../components/CalltoAction/CallToAction";
import { Link } from "react-router-dom";

const Login = () => (
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
          />

          <svg class="input-icon email">
            <use href="opa" />
          </svg>

          <input
            class="auth__login--password"
            type="password"
            placeholder="Digite sua senha"
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

          <Link to="/adm">
            <button>Entrar</button>
          </Link>
        </div>
      </div>
    </div>
    <Call />
    <Footer />
  </>
);

export default Login;
