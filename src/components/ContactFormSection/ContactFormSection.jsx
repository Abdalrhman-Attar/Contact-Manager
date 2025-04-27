import React, { useState } from "react";
import FormTitle from "../FormTitle/FormTitle";
import ContactsForm from "../ContactsForm/ContactsForm";
import Button from "../Button/Button";

function ContactForm(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    let newContact = {
      username,
      email,
    };

    props.addContact(newContact);

    setUsername("");
    setEmail("");
  };

  return (
    <div>
      <FormTitle title="Contact Form" />
      <ContactsForm onSubmit={onSubmit} username={username} setUsername={setUsername} email={email} setEmail={setEmail}>
        <Button text="Add Contact" onClick={onSubmit} />
      </ContactsForm>
    </div>
  );
}

export default ContactForm;
