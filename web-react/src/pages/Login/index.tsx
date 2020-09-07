import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { GiCoffeeCup } from "react-icons/gi";
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import { FiLogIn } from 'react-icons/fi';

import GlobalStyle from '../../styles/global';
import {
	PageLogin,
	ContainerLogin,
	InputLogin,
	ShowPass,
	BtnLogin,
	ForgotPass,
	ForgotPassLink,
	Footer
} from './styles';

const Login: React.FC = () => {
	const [ showPass, setShowPass ] = useState(false);
	const [ cpfCnpj, setCpfCnpj ] = useState('');
	const [ password, setPassword ] = useState('');

	const showPassword = () => setShowPass(!showPass);

	function handleLogin(e) {
		e.preventDefault();

		toast.error("🤫 Hoje Não!")
	}

	return (
		<>
			<GlobalStyle />

			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>

			<PageLogin>
				<ContainerLogin>
					<div className="logo">
						<GiCoffeeCup size={60} color="#4538A4" />
					</div>

					<h1 className="title">Bem-vindo</h1>

					<form onSubmit={() => { }}>
						<InputLogin
							type="number"
							name="cpf-cnpj"
							label=""
							value={cpfCnpj}
							onChange={e => { setCpfCnpj(e.target.value) }}
							required
						>
							<span className="label-login">CPF/CNPJ</span>
						</InputLogin>

						<InputLogin
							type={showPass ? "text" : "password"}
							name="password"
							label=""
							value={password}
							onChange={e => { setPassword(e.target.value) }}
							autoComplete="current-password"
							required
						>
							<span className="label-login">SENHA</span>
							<ShowPass onClick={showPassword}>
								{showPass ? <BsEyeSlashFill /> : <BsEyeFill />}
							</ShowPass>
						</InputLogin>

						<BtnLogin onClick={handleLogin}>
							<FiLogIn size={18}/> <span>Entrar</span>
						</BtnLogin>
					</form>

					<ForgotPass>
						<ForgotPassLink to="/forgot">Esqueci minha senha</ForgotPassLink>
					</ForgotPass>

					<Footer>
						<p>Made with <span role="img" aria-label="skull">💀</span> by Vinicius Santos</p>
					</Footer>
				</ContainerLogin>
			</PageLogin>
		</>
	);
}

export default Login;
