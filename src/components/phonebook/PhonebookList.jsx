import { connect } from "react-redux";
import phonebookActions from "../../redux/phonebook-actions";

const PhonebookList = ({ contacts, onRemove }) => {
  return(
    <ul>
        {contacts.map((contact) => (
      <li key={contact.id}>
        <p>
          📱 {contact.name}: {contact.number}
        </p>
        <button
          onClick={() => {
            onRemove(contact.id);
          }}
        >
          Remove
        </button>
      </li>))}
    </ul>
  )


}

const getVisibleContacts = (allContacts, filter) => {
  const normalizedContactNames = filter.toString().toLowerCase();
  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedContactNames)
  );
};

const mapStateToProps = ({phonebook: {contacts, filter}}) => ({
  contacts: getVisibleContacts(contacts, filter)
})

const mapDispatchToProps = dispatch => ({
  onRemove: id => {dispatch(phonebookActions.deleteContact(id))}
})

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookList)

