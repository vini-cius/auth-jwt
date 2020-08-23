import React, { useState } from 'react';
import { GiCoffeeCup } from 'react-icons/gi';

import GlobalStyle from '~/styles/global';
import {
	PageForgot,
	ContainerForgot,
	InputEmail,
	ButtonSend
} from './styles';

export default function ForgotPass() {
	const [email, setEmail] = useState('');

	function handleRequestPass(e){
		e.preventDefault();
	}

	return (
		<>
			<GlobalStyle />

			<PageForgot>
				<ContainerForgot>
					<div className="logo">
						<GiCoffeeCup size={60} color="#4538A4" />
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
							onChange={e => { setEmail(e.target.value) }}
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
