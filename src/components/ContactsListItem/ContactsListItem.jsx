import Button from "../Button/Button";

function ContactsListItem({ contact, index, onDelete }) {
  const { userName, email } = contact;

  const onDeleteContact = (e) => {
    e.preventDefault();

    onDelete(index);
  };

  return (
    <li key={index}>
      <div className="contact-item">
        <div className="contact-info">
          <h3>{userName}</h3>
          <p>{email}</p>
        </div>
      </div>
      <Button text="Delete" onClick={onDeleteContact} />
    </li>
  );
}

export default ContactsListItem;
