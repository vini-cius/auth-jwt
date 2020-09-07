import React, { ReactNode } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
	colors: {
		background: "#F0F0F7",
		primary: "#4F78D6",
		primary_light: "#65A0DD",
		primary_dark: "#4538A4",
		title: "#32264D",
		text_base: "#737380",
		text_light: "#999999",
		text_in_primary: "#FFFFFF",
		line_in_white: "#E6E6F0",
		input_background: "#F8F8FC",
		button_text: "#FFFFFF",
		box_base: "#FFFFFF",
	}
}

interface IProps {
	children: ReactNode;
}

const Theme = ({ children }: IProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
