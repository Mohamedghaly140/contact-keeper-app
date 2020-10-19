import React, { Fragment, useContext } from "react";
import ContactItem from "../ContactItem/ContactItem";
import ContactContext from "../../../Context/Contact/contactContext";

const Contacts = () => {
	const contactContext = useContext(ContactContext);

	const { contacts, filtered } = contactContext;

	if (contacts.length === 0) {
		return <h4>Please start add contacts...</h4>;
	}

	if (filtered) {
		return (
			<Fragment>
				{filtered.map(contact => (
					<ContactItem key={contact.id} contact={contact} />
				))}
			</Fragment>
		);
	} else {
		return (
			<Fragment>
				{contacts.map(contact => (
					<ContactItem key={contact.id} contact={contact} />
				))}
			</Fragment>
		);
	}
};

export default Contacts;
