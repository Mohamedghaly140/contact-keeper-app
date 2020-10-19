import React from "react";
import Contacts from "../../../Contacts/Contacts/Contacts";
import ContactForm from "../../../Contacts/ContactForm/ContactForm";
import ContactFilter from "../../../Contacts/ContactFilter/ContactFilter";

const Home = () => {
	return (
		<div className="grid-2">
			<div>
				<ContactForm />
			</div>
			<div>
				<ContactFilter />
				<Contacts />
			</div>
		</div>
	);
};

export default Home;
