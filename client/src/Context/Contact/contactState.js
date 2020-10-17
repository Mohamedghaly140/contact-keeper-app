import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
	ADD_CONTACT,
	DELETE_CONTACT,
	UPDATE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
} from "../types";

const ContactState = props => {
	const initialState = {
		contacts: [
			{
				id: 1,
				name: "jill johnson",
				email: "jill@gmail.com",
				phone: "111-111-1111",
				type: "personal",
			},
			{
				id: 2,
				name: "Harry White",
				email: "harry@gmail.com",
				phone: "222-222-2222",
				type: "personal",
			},
			{
				id: 3,
				name: "Sara Watson",
				email: "sara@gmail.com",
				phone: "333-333-3333",
				type: "professional",
			},
		],
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Add Contact
	const addContact = contact => {
		contact.id = uuidv4();
		dispatch({ type: ADD_CONTACT, payload: contact });
	};

	// Delete Contact
	const deleteContact = id => {
		dispatch({ type: DELETE_CONTACT, contactId: id });
	};

	// Set Current Contact

	// Clear Current Contact

	// Update Contact

	// Filter Contacts

	// Clear Contacts

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				addContact,
				deleteContact,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;