import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
		colors: {
			background: string;
			primary: string;
			primary_light: string;
			primary_dark: string;
			title: string;
			text_base: string;
			text_light: string;
			text_in_primary: string;
			line_in_white: string;
			input_background: string;
			button_text: string;
			box_base: string;
		}
  }
}
