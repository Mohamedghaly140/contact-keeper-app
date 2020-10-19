import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "../ContactItem/ContactItem";
import ContactContext from "../../../Context/Contact/contactContext";

const Contacts = props => {
	const contactContext = useContext(ContactContext);

	const { contacts, filtered } = contactContext;

	if (contacts.length === 0) {
		return <h4>Please start add contacts...</h4>;
	}

	let outputContacts = contacts.map(contact => (
		<CSSTransition key={contact.id} timeout={500} classNames="item">
			<ContactItem contact={contact} />
		</CSSTransition>
	));

	if (filtered) {
		return (outputContacts = filtered.map(contact => (
			<CSSTransition key={contact.id} timeout={500} classNames="item">
				<ContactItem contact={contact} />
			</CSSTransition>
		)));
	}

	return (
		<Fragment>
			<TransitionGroup>{outputContacts}</TransitionGroup>
		</Fragment>
	);
};

export default Contacts;
