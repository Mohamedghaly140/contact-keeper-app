import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContactState from "./Context/Contact/contactState";
import AuthState from "./Context/Auth/authState";

ReactDOM.render(
	<AuthState>
		<ContactState>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ContactState>
	</AuthState>,
	document.getElementById("root")
);
