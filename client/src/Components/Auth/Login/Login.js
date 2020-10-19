import React, { useState } from "react";

const Login = props => {
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
