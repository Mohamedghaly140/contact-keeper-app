import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContactState from "./Context/Contact/contactState";
import AuthState from "./Context/Auth/authState";
import AlertState from "./Context/Alert/alertState";

ReactDOM.render(
	<AuthState>
		<ContactState>
			<AlertState>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AlertState>
		</ContactState>
	</AuthState>,
	document.getElementById("root")
);
