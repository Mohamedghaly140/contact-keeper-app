import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContactState from "./Context/Contact/contactState";

ReactDOM.render(
	<ContactState>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ContactState>,
	document.getElementById("root")
);
