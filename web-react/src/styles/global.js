import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	:root {
		font-size: 60%;
	}

  * {
    margin: 0;
    padding: 0;
		box-sizing: border-box;
	}

	*:focus {
		outline: 0;
	}

	html, body, #root {
		text-rendering: optimizelegibility;
		height: 100vh;
	}

  body {
    color: #333;
		background-color: ${props => props.theme.color_background};
  }

	body, input, button, textarea {
		font: 1.6rem 'Roboto', sans-serif;
	}

	a {
		text-decoration: none;
	}

	ul {
		list-style: none;
		padding: 0;
  	margin: 0;
	}

	#root {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.cursor-pointer {
		cursor: pointer;
	}

	@media (min-width: 700px) {
  	:root {
    	font-size: 62.5%;
  	}
	}
`;
