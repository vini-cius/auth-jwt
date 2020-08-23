import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	color_background: "#F0F0F7",
	color_primary: "#4F78D6",
	color_primary_light: "#65A0DD",
	color_primary_dark: "#4538A4",
	color_title: "#32264D",
	color_text_base: "#737380",
	color_text_light: "#999999",
	color_text_in_primary: "#FFFFFF",
	color_line_in_white: "#E6E6F0",
	color_input_background: "#F8F8FC",
	color_button_text: "#FFFFFF",
	color_box_base: "#FFFFFF",
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
