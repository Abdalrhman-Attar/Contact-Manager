import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import ContactForm from './components/ContactFormSection/ContactFormSection';

function App() {

  const [contacts, setContacts] = useState([]);

  // add contact function
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="App">
      <ContactForm addContact={addContact} />
    </div>
  );
}

export default App;
