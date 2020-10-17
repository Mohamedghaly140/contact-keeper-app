import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../../Context/Contact/contactContext";

const ContactForm = () => {
	const contactContext = useContext(ContactContext);

	const {
		addContact,
		current,
		clearCurrentContact,
		updateContact,
	} = contactContext;

	useEffect(() => {
		if (current) {
			setContact(current);
		} else {
			setContact({
				name: "",
				email: "",
				phone: "",
				type: "personal",
			});
		}
	}, [current]);

	const [contact, setContact] = useState({
		name: "",
		email: "",
		phone: "",
		type: "personal",
	});

	const { name, email, phone, type } = contact;

	const inputChangeHandler = event => {
		setContact({ ...contact, [event.target.name]: event.target.value });
	};

	const formSubmitHandler = event => {
		event.preventDefault();
		if (current) {
			updateContact(contact);
		} else {
			addContact(contact);
		}
		clearAllHandler();
	};

	const clearAllHandler = _ => {
		clearCurrentContact();
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<h2 className="text-primary">
				{current ? "Edit Contact" : "Add Contact"}
			</h2>
			<input
				type="text"
				placeholder="Name"
				name="name"
				value={name}
				onChange={inputChangeHandler}
			/>
			<input
				type="email"
				placeholder="Email"
				name="email"
				value={email}
				onChange={inputChangeHandler}
			/>
			<input
				type="text"
				placeholder="Phone Number"
				name="phone"
				value={phone}
				onChange={inputChangeHandler}
			/>
			<h5>Contact Type</h5>
			<input
				type="radio"
				name="type"
				value="personal"
				checked={type === "personal"}
				onChange={inputChangeHandler}
			/>{" "}
			Personal{" "}
			<input
				type="radio"
				name="type"
				value="professional"
				checked={type === "professional"}
				onChange={inputChangeHandler}
			/>{" "}
			Professional
			<div>
				<input
					type="submit"
					value={current ? "Update Contact" : "Add Contact"}
					className="btn btn-primary btn-block"
				/>
			</div>
			{current && (
				<div>
					<button
						className="btn btn-light btn-block"
						onClick={clearAllHandler}
					>
						Clear
					</button>
				</div>
			)}
		</form>
	);
};

export default ContactForm;
