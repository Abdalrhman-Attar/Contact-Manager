import React from "react";
import "./ContactsForm.css";

function ContactsForm({ onSubmit, username, setUsername, email, setEmail, children }) {
  return (
    <form onSubmit={onSubmit} className="contact-form">
      <input type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)} className="input-field" />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" />
      {children}
    </form>
  );
}

export default ContactsForm;
