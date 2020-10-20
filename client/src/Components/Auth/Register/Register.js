import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../../Context/Alert/alertContext";
import AuthContext from "../../../Context/Auth/authContext";

const Register = props => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { register, error, clearErrors } = authContext;

	useEffect(() => {
		if (error) {
			setAlert(error, "danger");
			clearErrors();
		}
	}, [error]);

	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const { name, email, password, confirmPassword } = user;

	const registerHandler = event => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	const submitRegisterHandler = event => {
		event.preventDefault();
		if (name === "" || email === "" || password === "") {
			setAlert("Please enter all fields", "danger");
		} else if (password !== confirmPassword) {
			setAlert("Passwords do not match", "danger");
		} else if (password.length < 6 && confirmPassword.length < 6) {
			setAlert("Password min length 6 charactars", "danger");
		} else {
			register({
				name,
				email,
				password,
			});
		}
	};

	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Register</span>
			</h1>
			<form onSubmit={submitRegisterHandler}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						value={name}
						onChange={registerHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email Address</label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={registerHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={registerHandler}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						onChange={registerHandler}
					/>
				</div>
				<input
					type="submit"
					value="Register"
					className="btn btn-primary btn-block"
				/>
			</form>
		</div>
	);
};

export default Register;
