import styled from 'styled-components';

export const InputBlock = styled.div`
	position: relative;

	& + & {
		margin-top: 1.4rem;
	}

	&:focus-within::after {
		width: calc(100% - 3.2rem);
		height: 2px;
		content: '';
		background: ${({ theme }) => theme.colors.primary_light};
		position: absolute;
		left: 1.6rem;
		right: 1.6rem;
		bottom: 0;
	}

	label {
		font-size: 1.4rem;
	}

	input {
		width: 100%;
		height: 4.5rem;

		border: 1px solid ${({ theme }) => theme.colors.line_in_white};
		border-radius: 0.8rem;
		outline: 0;

		font: 400 1.6rem;

		background: ${({ theme }) => theme.colors.input_background};
		margin-top: 0.8rem;
	  padding: 0 1.6rem;

		::placeholder {
			color: ${({ theme }) => theme.colors.text_light};
		}
	}
`;
