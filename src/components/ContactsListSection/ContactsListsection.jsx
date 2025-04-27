import ContactsListItem from "../ContactsListItem/ContactsListItem";

function ContactsListSection(props) {
  const { contacts, deleteContact } = props;

  return (
    <div>
      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {contacts.map((contact, index) => (
          <ContactsListItem contact={contact} index={index} onDelete={deleteContact} />
        ))}
      </ul>
    </div>
  );
}

export default ContactsListSection;
