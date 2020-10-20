import {
	GET_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	UPDATE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
	CONTACT_ERROR,
	CLEAR_CONTACTS,
} from "../types";

export default (state, action) => {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state,
				contacts: action.contacts,
				loading: false,
			};
		case ADD_CONTACT:
			return {
				...state,
				contacts: [...state.contacts, action.payload],
				loading: false,
			};
		case UPDATE_CONTACT:
			return {
				...state,
				contacts: state.contacts.map(contact =>
					contact.id === action.contact.id ? action.contact : contact
				),
				loading: false,
			};
		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter(
					contact => contact.id !== action.contactId
				),
				loading: false,
			};
		case CLEAR_CONTACTS:
			return {
				...state,
				contacts: null,
				loading: false,
				current: null,
				filtered: null,
				error: null,
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.contact,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case FILTER_CONTACTS:
			return {
				...state,
				filtered: state.contacts.filter(contact => {
					const regex = new RegExp(`${action.text}`, "gi");
					return (
						contact.name.match(regex) || contact.email.match(regex)
					);
				}),
				loading: false,
			};
		case CLEAR_FILTER:
			return {
				...state,
				filtered: null,
			};
		case CONTACT_ERROR:
			return {
				...state,
				error: action.error,
			};
		default:
			return state;
	}
};
