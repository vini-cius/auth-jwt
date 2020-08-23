import styled from 'styled-components';

export const PageWrapper = styled.div`
	width: 100vw;
	height: 100vh;
`;

export const PageContent = styled.main`
	width: 100%;
	height: 100%;

	background: ${props => props.theme.color_box_base};
	margin: auto;

	@media (min-width: 700px) {
		max-width: 1100px;
	}
`;
