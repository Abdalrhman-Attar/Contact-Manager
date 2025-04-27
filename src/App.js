import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactFormSection/ContactFormSection';
import ContactsListSection from './components/ContactsListSection/ContactsListsection';

function App() {

  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => setContacts([...contacts, contact]);

  const deleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };


  return (
    <div className="App">
      <ContactForm addContact={addContact} />
      <ContactsListSection contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
