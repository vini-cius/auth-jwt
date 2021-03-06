import styled, { css } from 'styled-components';
import Input from '../../components/Input';

export const PageForgot = styled.div`
  width: 100vw;
	height: 100vh;

  display: flex;
  justify-content: center;
	align-items: center;

	background: ${props => props.theme.colors.background};
	overflow: hidden;
`;

export const ContainerForgot = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	width: 100%;
  min-width: 36rem;
	height: 100%;

	padding: 0 3rem;
	margin: 4rem;

  background: ${props => props.theme.colors.box_base};
  border-radius: 0.4rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);

	overflow: hidden;

	@media(min-width: 700px) {
		max-width: 560px;
	}

	.logo {
		display: flex;
		justify-content: center;
		margin-bottom: 4rem;

		@media(min-width: 700px) {
			margin-bottom: 5em;
		}

		svg {
			width: 80px;
			height: 80px;
			fill: ${props => props.theme.colors.primary_dark};
		}
	}

	.title {
		width: 100%;

		@media(min-width: 530px) {
			width: 70%;
		}

		h1 {
			color: ${props => props.theme.colors.title};
			align-self: flex-start;
			margin-bottom: 1.2rem;
		}

		h2 {
			color: ${props => props.theme.colors.text_light};
			font-size: 1.7rem;
			align-self: flex-start;
			margin-bottom: 4rem;

			@media(min-width: 485px) {
				font-size: 2rem;
			}
		}
	}

	form {
		width: 100%;

		@media(min-width: 530px) {
			width: 70%;
		}
	}
`;

export const InputEmail = styled(Input)`
	.label-email {
		position: absolute;
		bottom: 1.4rem;
		left: 0;
		font-size: 1.2rem;
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
		background: transparent !important;
		padding: 0;

		&:focus {
			border-color: ${props => props.theme.colors.primary};

			& + .label-email {
				font-size: 1.2rem;
				top: 0.1rem;
			}
		}

		${
		props => props.value !== ''
			?	css`
				& + .label-email {
					font-size: 1.2rem;
					top: 0.1rem;
				}
			`
			: ''
		}
	}
`;

export const ButtonSend = styled.button`
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

	padding: 0 2rem;
	margin-top: 4.5rem;
  width: 100%;
	height: 5rem;

	transition: filter 0.2s;

	&:hover {
		cursor: pointer;
		filter: brightness(80%);
	}
`;
