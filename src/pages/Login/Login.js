import React from 'react';
import './style.scss'
import SectionTitle from '../../components/utils/SectionTitle'
import Logo from '../../assets/svg/logopurple.svg'
const Login= () => (
<>

<div class="auth">
        <div class="auth__cover">
            <img class="logo" src={Logo} alt="logo-combate-ao-covid-19" />
            <svg>
                <use href="opa" />
            </svg>
        </div>
        <div class="auth__login">
            <SectionTitle title="Login">Faça login para gerenciar ações.</SectionTitle>

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

                <button>Entrar</button>
            </div>
        </div>
    </div>


</>

);

export default Login;

   




