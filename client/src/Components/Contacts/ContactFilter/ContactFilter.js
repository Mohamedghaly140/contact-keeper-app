import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../../Context/Contact/contactContext";

const ContactFilter = () => {
	const contactContext = useContext(ContactContext);
	const text = useRef("");

	const { filtered, filterContacts, clearFilter } = contactContext;

	useEffect(() => {
		if (filtered === null) {
			text.current.value = "";
		}
	}, [filtered]);

	const filterContactHandler = event => {
		event.preventDefault();
		if (text.current.value !== "") {
			filterContacts(event.target.value);
		} else {
			clearFilter();
		}
	};

	return (
		<form>
			<input
				ref={text}
				type="search"
				placeholder="Filter Contacts..."
				onChange={filterContactHandler}
			/>
		</form>
	);
};

export default ContactFilter;
