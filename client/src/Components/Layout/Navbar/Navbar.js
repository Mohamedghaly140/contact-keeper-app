import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../../Context/Auth/authContext";
import ContactContext from "../../../Context/Contact/contactContext";

const Navbar = ({ title, icon }) => {
	const authContext = useContext(AuthContext);
	const contactContext = useContext(ContactContext);

	const { logout, isAuth, user } = authContext;
	const { clearContacts } = contactContext;

	const onLogoutHandler = () => {
		logout();
		clearContacts();
	};

	const authLinks = (
		<Fragment>
			<li> Hello {user && user.name}</li>
			<li>
				<button style={btnStyle} onClick={onLogoutHandler}>
					<i className="fas fa-sign-in-alt" />{" "}
					<span className="hide-sm">Logout</span>
				</button>
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

const btnStyle = {
	background: "none",
	border: "none",
	paddingLeft: "12px",
	color: "#fff",
	cursor: "pointer",
	outline: "none",
};

export default Navbar;
