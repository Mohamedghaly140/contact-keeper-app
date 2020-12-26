import React, { useReducer } from 'react';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
	GET_CONTACTS,
	CLEAR_CONTACTS,
	ADD_CONTACT,
	DELETE_CONTACT,
	UPDATE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	FILTER_CONTACTS,
	CLEAR_FILTER,
	CONTACT_ERROR,
} from '../types';

const ContactState = props => {
	const initialState = {
		contacts: null,
		loading: true,
		current: null,
		filtered: null,
		error: null,
	};

	const [state, dispatch] = useReducer(contactReducer, initialState);

	// Get Contacts
	const getContacts = async () => {
		try {
			const res = await axios.get(
				`${process.env.REACT_APP_BACKEND_URL}/api/contacts`
			);

			dispatch({ type: GET_CONTACTS, contacts: res.data });
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				error: err.respone.data.msg,
			});
		}
	};

	// Add Contact
	const addContact = async contact => {
		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post(
				`${process.env.REACT_APP_BACKEND_URL}/api/contacts`,
				contact,
				config
			);

			dispatch({
				type: ADD_CONTACT,
				payload: res.data,
			});
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				error: err.respone.data.msg,
			});
		}
	};

	// Delete Contact
	const deleteContact = async id => {
		try {
			await axios.delete(
				`${process.env.REACT_APP_BACKEND_URL}/api/contacts/${id}`
			);

			dispatch({ type: DELETE_CONTACT, contactId: id });
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				error: err.respone.data.msg,
			});
		}
	};

	// Clear Contacts
	const clearContacts = () => {
		dispatch({ type: CLEAR_CONTACTS });
	};

	// Set Current Contact
	const setCurrentContact = contact => {
		dispatch({ type: SET_CURRENT, contact });
	};

	// Clear Current Contact
	const clearCurrentContact = _ => {
		dispatch({ type: CLEAR_CURRENT });
	};

	// Update Contact
	const updateContact = async contact => {
		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.put(
				`${process.env.REACT_APP_BACKEND_URL}/api/contacts/${contact._id}`,
				contact,
				config
			);

			dispatch({ type: UPDATE_CONTACT, contact: res.data });
		} catch (err) {
			dispatch({
				type: CONTACT_ERROR,
				error: err.respone.data.msg,
			});
		}
	};

	// Filter Contacts
	const filterContacts = text => {
		dispatch({ type: FILTER_CONTACTS, text });
	};

	// Clear Contacts
	const clearFilter = _ => {
		dispatch({ type: CLEAR_FILTER });
	};

	return (
		<ContactContext.Provider
			value={{
				contacts: state.contacts,
				current: state.current,
				filtered: state.filtered,
				error: state.error,
				loading: state.loading,
				getContacts,
				addContact,
				clearContacts,
				updateContact,
				deleteContact,
				filterContacts,
				clearFilter,
				setCurrentContact,
				clearCurrentContact,
			}}
		>
			{props.children}
		</ContactContext.Provider>
	);
};

export default ContactState;
