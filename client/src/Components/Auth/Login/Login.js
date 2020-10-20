import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../../Context/Alert/alertContext";
import AuthContext from "../../../Context/Auth/authContext";

const Login = props => {
	const { history } = props;
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { login, error, clearErrors, isAuth } = authContext;

	useEffect(() => {
		if (isAuth) {
			history.push("/");
		}

		if (error) {
			setAlert(error, "danger");
			clearErrors();
		}
		// eslint-disable-next-line
	}, [error, isAuth, history]);

	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const { email, password } = user;

	const registerHandler = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const submitRegisterHandler = event => {
		event.preventDefault();
		if (email === "" || password === "") {
			setAlert("Please enter all fields", "danger");
		} else {
			login({
				email,
				password,
			});
		}
	};

	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Login</span>
			</h1>
			<form onSubmit={submitRegisterHandler}>
				<div className="form-group">
					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						name="email"
						value={email}
						required
						onChange={registerHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						required
						onChange={registerHandler}
					/>
				</div>
				<input
					type="submit"
					value="Login"
					className="btn btn-primary btn-block"
				/>
			</form>
		</div>
	);
};

export default Login;
