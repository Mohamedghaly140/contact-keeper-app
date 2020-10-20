import React, { Fragment } from "react";

import { Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./Components/Layout/Navbar/Navbar";
import About from "./Components/Layout/Pages/About/About";
import Home from "./Components/Layout/Pages/Home/Home";
import Register from "./Components/Auth/Register/Register";
import Login from "./Components/Auth/Login/Login";
import Alert from "./Components/UI/Alert/Alert";

import setAuthToken from "./Utils/setAuthToken";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<div className="container">
				<Alert />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/register" component={Register} />
					<Route path="/login" component={Login} />
				</Switch>
			</div>
		</Fragment>
	);
};

export default App;
