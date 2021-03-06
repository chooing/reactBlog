import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import theme from './styles/theme'
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles/>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
