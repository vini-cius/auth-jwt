import styled from 'styled-components';

export const HomePage = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	padding: 2.5rem;

	.title {
		align-self: flex-start;
		color: ${props => props.theme.colors.title};
	}

	.service-img {
		width: 30rem;
		height: 30rem;
		margin: 2.5rem 0;
	}

	article p {
		font-size: 1.8rem;
		color: ${props => props.theme.colors.text_base};
		text-align: justify;
	}

	@media(min-width: 768px){
		display: grid;
		grid-template-rows: 1fr;
		grid-template-columns: 2fr 1fr;
		grid-template-areas:
      "title . "
      "article image"
    ;

		.title {
			grid-area: title;
		}

		article {
			grid-area: article;
			margin-top: 3rem;
			margin-right: 3rem;
		}

		.service-img {
			grid-area: image;
			align-self: flex-start;
			justify-self: center;
		}
	}
`;
