import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ContactItem from "../ContactItem/ContactItem";
import Spinner from "../../UI/Spinner/Spinner";
import ContactContext from "../../../Context/Contact/contactContext";

const Contacts = props => {
	const contactContext = useContext(ContactContext);

	const { contacts, filtered, getContacts, loading } = contactContext;

	useEffect(() => {
		getContacts();
		// eslint-disable-next-line
	}, []);

	if (contacts !== null && contacts.length === 0) {
		return (
			<h4 style={{ textAlign: "center" }}>
				Please start add contacts...
			</h4>
		);
	}

	let outputContacts =
		contacts !== null &&
		contacts.map(contact => (
			<CSSTransition key={contact._id} timeout={500} classNames="item">
				<ContactItem contact={contact} />
			</CSSTransition>
		));

	if (filtered) {
		return (outputContacts = filtered.map(contact => (
			<CSSTransition key={contact._id} timeout={500} classNames="item">
				<ContactItem contact={contact} />
			</CSSTransition>
		)));
	}

	return (
		<Fragment>
			<TransitionGroup>
				{contacts !== null && loading ? <Spinner /> : outputContacts}
			</TransitionGroup>
		</Fragment>
	);
};

export default Contacts;
