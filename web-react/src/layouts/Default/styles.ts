import styled from 'styled-components';

export const PageWrapper = styled.div`
	width: 100vw;
	height: 100vh;
`;

export const PageContent = styled.main`
	background: ${props => props.theme.colors.box_base};
	margin: 0 auto;
	min-height: 100%;

	@media (min-width: 700px) {
		max-width: 1100px;
	}
`;
