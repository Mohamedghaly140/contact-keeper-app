import React, { useState, useContext } from "react";
import AlertContext from "../../../Context/Alert/alertContext";

const Register = props => {
	const alertContext = useContext(AlertContext);

	const { setAlert } = alertContext;

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
			setAlert("Passwords does not match", "danger");
		} else if (password.length < 6 && confirmPassword.length < 6) {
			setAlert("Password min length 6 charactars", "danger");
		} else {
			console.log("Register Submited");
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
