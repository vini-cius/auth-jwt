import styled, { css } from 'styled-components';

interface MenuProps {
	toggle: boolean;
};

export const Head = styled.header`
 	display: flex;
  flex-direction: column;
	background-color: ${props => props.theme.colors.primary};
	color: ${props => props.theme.colors.text_in_primary};
	margin: auto;

	@media (min-width: 700px) {
		max-width: 1100px;
	}
`;

export const Container = styled.div`
	display: flex;
  align-items: center;
  justify-content: space-between;

	width: 90%;
	height: 6rem;
	margin: auto;

	@media (max-width: 425px) {
		.logo {
			display: none;
		}
	}

	.logo svg {
		width: 40px;
		height: 40px;

		fill: #FFFFFF;
	}
`;

export const ButtonExit = styled.button`
	background: transparent;
	border: 0;
	border-radius: 0.8rem;
	padding: 0.8rem;
	cursor: pointer;

	transition: all 0.2s;

	&:hover {
		font-size: 1.8rem;
	}

	svg {
		width: 26px;
		height: 26px;
	}
`;

export const MenuSection = styled.div<MenuProps>`
	nav ul {
		display: flex;
	}

	nav ul li a {
		text-decoration: none;

		font-size: 1.4rem;
		font-weight: bold;
		color: ${props => props.theme.colors.text_in_primary};

		padding: 2.4rem;
		cursor: pointer;

		transition: all 0.2s linear 0s;

		&:hover {
			background: rgba(255,255,255, 0.15);
		}

		&:visited {
			color: ${props => props.theme.colors.text_in_primary};
		}

		&:active {
			color: ${props => props.theme.colors.primary_dark};
		}

		@media (min-width: 620px) {
			font-size: 1.4rem;
		}
	}

	@media (max-width: 425px) {
		nav {
			display: none;
		}

		.menu-toggle {
			width: 30px;
      height: 30px;
			cursor: pointer;

			span {
				display: block;
        height: 0.5rem;
        width: 100%;
        margin: 0.6rem auto;
				background: ${props => props.theme.colors.text_in_primary};
				border-radius: 0.3rem;

        transition-duration: 0.3s;
			}
		}

		${props => props.toggle ?
		css`
			position: absolute;
			top:0;
			left:0;

			width: 100vw;
			height: 100vh;

			background-color: ${props => props.theme.colors.primary};

			z-index: 10;

			display: flex;
			justify-content: center;
			align-items: center;

			nav {
				display: block;

				ul {
	     	 	text-align: center;
  	     	display: block;

					li a {
						transition-duration: 0.5s;
						font-size: 3rem;
						line-height: 4rem;
						display: block;
					}
    		}
			}

			.menu-toggle {
        position: absolute;
        right: 25px;
        top: 15px;

				span {
					&:nth-child(1) {
						transform: rotate(45deg) translate(6px, 7px);
					}

					&:nth-child(2) {
						opacity: 0;
					}

					&:nth-child(3) {
						transform: rotate(-45deg) translate(8px, -9px);
					}
				}
			}
		`
		: '' }
	}
`;
