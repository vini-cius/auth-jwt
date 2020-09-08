import React, { useState, FormEvent, ChangeEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';

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

import { ReactComponent as CoffeeIcon } from '../../assets/icons/coffee-cup.svg';
import { ReactComponent as EyeIcon } from '../../assets/icons/eye-fill.svg';
import { ReactComponent as EyeSlashIcon } from '../../assets/icons/eye-slash-fill.svg';
import { ReactComponent as LogInIcon } from '../../assets/icons/log-in.svg';

const Login: React.FC = () => {
	const [ showPass, setShowPass ] = useState<boolean>(false);
	const [ cpfCnpj, setCpfCnpj ] = useState<string>('');
	const [ password, setPassword ] = useState<string>('');

	const showPassword = () => setShowPass(!showPass);

	function handleLogin(e: FormEvent) {
		e.preventDefault();

		toast.error("🤫 Hoje Não!");
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
					<div className="logo" aria-label="Coffee">
						<CoffeeIcon role="img"/>
					</div>

					<h1 className="title">Bem-vindo</h1>

					<form onSubmit={() => { }}>
						<InputLogin
							type="email"
							inputMode="email"
							name="email"
							label=""
							value={cpfCnpj}
							onChange={(e: ChangeEvent<HTMLInputElement>) => { setCpfCnpj(e.target.value) }}
							required
						>
							<span className="label-login">E-MAIL</span>
						</InputLogin>

						<InputLogin
							type={showPass ? "text" : "password"}
							name="password"
							label=""
							value={password}
							onChange={(e: ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) }}
							autoComplete="current-password"
							required
						>
							<span className="label-login">SENHA</span>
							<ShowPass onClick={showPassword}>
								{showPass ? <EyeSlashIcon/> : <EyeIcon/>}
							</ShowPass>
						</InputLogin>

						<BtnLogin onClick={handleLogin}>
							<LogInIcon /> <span>Entrar</span>
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
