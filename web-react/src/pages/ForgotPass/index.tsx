import React, { useState, FormEvent, ChangeEvent } from 'react';

import GlobalStyle from '../../styles/global';
import {
	PageForgot,
	ContainerForgot,
	InputEmail,
	ButtonSend
} from './styles';

import { ReactComponent as CoffeeIcon } from '../../assets/icons/coffee-cup.svg';

const ForgotPass: React.FC = () => {
	const [email, setEmail] = useState('');

	function handleRequestPass(e: FormEvent) {
		e.preventDefault();
	}

	return (
		<>
			<GlobalStyle />

			<PageForgot>
				<ContainerForgot>
					<div className="logo" aria-label="Coffee">
						<CoffeeIcon role="img"/>
					</div>

					<div className="title">
						<h1>Eita, esqueceu <br /> sua senha?</h1>
						<h2>Não esquenta, vamos dar um jeito nisso.</h2>
					</div>

					<form onSubmit={handleRequestPass}>
						<InputEmail
							name="email"
							label=""
							value={email}
							onChange={(e: ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) }}
							required
						>
							<span className="label-email">
								E-mail
							</span>
						</InputEmail>

						<ButtonSend>Enviar</ButtonSend>
					</form>
				</ContainerForgot>
			</PageForgot>
		</>
	);
}

export default ForgotPass;
