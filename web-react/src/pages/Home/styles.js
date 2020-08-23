import styled from 'styled-components';

export const HomePage = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	padding: 2.5rem;

	.title {
		align-self: flex-start;
		color: ${props => props.theme.color_title};
	}

	.service-img {
		width: 80%;
		margin: 2.5rem 0;
	}

	article p {
		font-size: 1.8rem;
		color: ${props => props.theme.color_text_base};
	}
`;
