import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { getContacts } from '../../redux/contactsSlice.js';
import { getFilter } from '../../redux/filtersSlice.js';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const visibleContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter) ||
      contact.number.split('-').join('').includes(filter)
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, number }) => (
        <li
          key={id}
          // className={`${css.contactListItem} ${
          //   deletedId === id ? css.slideOut : ''
          // }`}
        >
          <Contact name={name} number={number} id={id} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
