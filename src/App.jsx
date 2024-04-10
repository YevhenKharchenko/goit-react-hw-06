import ContactForm from './components/ContactForm/ContactForm';
import SearchBar from './components/SearchBox/SearchBar';
import ContactList from './components/ContactList/ContactList';
import { useState, useEffect } from 'react';

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem('contacts');
  //   return JSON.parse(savedContacts) ?? [];
  // });
  // const [filter, setFilter] = useState('');
  // const [deletedId, setDeletedId] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const deleteContact = contactId => {
  //   setTimeout(() => {
  //     setContacts(contacts => contacts.filter(el => el.id !== contactId));
  //   }, 200);
  // };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
}

export default App;
