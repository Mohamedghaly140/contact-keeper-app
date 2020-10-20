import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../../Context/Auth/authContext";

const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);

	const { logout, isAuth, user } = authContext;

	const onLogoutHandler = () => {
		logout();
	};

	const authLinks = (
		<Fragment>
			<li>| Hello {user && user.name}</li>
			<li>
				<a href="#!" onClick={onLogoutHandler}>
					<i className="fas fa-sign-in-alt" />{" "}
					<span className="hide-sm">Logout</span>
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li>
				<Link to="/register">Register</Link>
			</li>
			<li>
				<Link to="/login">Login</Link>
			</li>
		</Fragment>
	);

	return (
		<div className="navbar bg-primary">
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul>
				{isAuth && (
					<li>
						<Link to="/">Home</Link>
					</li>
				)}
				<li>
					<Link to="/about">About</Link>
				</li>
				{isAuth ? authLinks : guestLinks}
			</ul>
		</div>
	);
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

Navbar.defaultProps = {
	title: "Contact Keeper",
	icon: "fas fa-id-card-alt",
};

export default Navbar;
