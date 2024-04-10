import ContactForm from './components/ContactForm/ContactForm';
import SearchBar from './components/SearchBox/SearchBar';
import ContactList from './components/ContactList/ContactList';

function App() {
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
