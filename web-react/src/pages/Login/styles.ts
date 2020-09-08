import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';

export const PageLogin = styled.div`
  width: 100vw;
	height: 100vh;

  display: flex;
  justify-content: center;
	align-items: center;

	background: ${props => props.theme.colors.background};
	overflow: hidden;
`;

export const ContainerLogin = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	min-width: 100%;
	min-height: 100%;

	padding: 0 3rem;
	margin: 4rem;

  background: ${props => props.theme.colors.box_base};
  border-radius: 0.4rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);

	overflow: hidden;

	@media(min-width: 600px) {
		min-width: 56rem;
	}

	.logo {
		display: flex;
		justify-content: center;
		margin-bottom: 2.5rem;

		@media(min-width: 700px) {
			margin-bottom: 3.5rem;
		}

		svg {
			width: 8rem;
			height: 8rem;
			fill: ${props => props.theme.colors.primary_dark};
		}
	}

	.title {
		color: ${props => props.theme.colors.title};
		font-size: 2.6rem;
		text-align: center;
		font-weight: 500;
		margin-bottom: 2.5rem;

		@media(min-width: 700px) {
			font-size: 4rem;
		}
	}

	form {
		width: 100%;

		@media(min-width: 530px) {
			width: 70%;
		}
	}
`;

export const InputLogin = styled(Input)`
	.label-login {
		position: absolute;
		bottom: 1.2rem;
		left: 0;
		font-size: 1.4rem;
		color: ${props => props.theme.colors.text_light};
		transition: all 0.2s;
	}

	&:focus-within::after {
		width: 0;
		height: 0;
	}

	input {
		border: none;
		border-bottom: 0.2rem solid ${props => props.theme.colors.line_in_white};
		border-radius: 0;
		background: transparent;
		padding: 0;

		&:focus {
			border-color: ${props => props.theme.colors.primary};

			& + .label-login {
				font-size: 1.2rem;
				top: 0.1rem;
			}
		}

		${props => props.value !== ''
			? css`
					& + .label-login {
						font-size: 1.2rem;
						top: 0.1rem;
					}`
			: ''
		}
	}
`;

export const ShowPass = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  height: 100%;
  top: 1.2rem;
  right: 1rem;
  cursor: pointer;
	transition: all 0.4s;

	&:hover {
		svg {
			fill: ${props => props.theme.colors.primary};
			width: 2rem;
			height: 2rem;
		}
	}
`;

export const BtnLogin = styled.button`
	outline: none !important;
	border: none;

	font-size: 1.5rem;
	font-weight: bold;

	color: ${props => props.theme.colors.button_text};
	background: linear-gradient(
		to right,
		${props => props.theme.colors.primary},
		${props => props.theme.colors.primary_dark}
	);

	border-radius: 0.8rem;

  display: flex;
  justify-content: center;
	align-items: center;

	padding: 0 2rem;
	margin-top: 4.5rem;
  width: 100%;
	height: 5rem;

	transition: filter 0.2s;

	span {
		margin-left: 1.5rem;
	}

	&:hover {
		cursor: pointer;
		filter: brightness(80%);
	}
`;

export const ForgotPass = styled.div`
	text-align: center;
	padding-top: 4rem;

	@media(max-width: 320px){
		padding-top: 2rem;
		margin-bottom: 1rem;
	}
`;

export const ForgotPassLink = styled(Link)`
	color: ${props => props.theme.colors.primary};
	font-weight: 500;

	&:hover {
		text-decoration: underline;
	}
`;

export const Footer = styled.footer`
	position: absolute;
  bottom: 20px;

	p {
		color: ${props => props.theme.colors.text_light};
	}
`;
