import React, { Fragment } from "react";

import { Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import Navbar from "./Components/Layout/Navbar/Navbar";
import About from "./Components/Layout/Pages/About/About";
import Home from "./Components/Layout/Pages/Home/Home";

const App = () => {
	return (
		<Fragment>
			<Navbar />
			<div className="container">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
				</Switch>
			</div>
		</Fragment>
	);
};

export default App;
