import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import * as storage from 'services/localStorage';
import image from 'images/image.jpg';
import s from './App.module.css';
import Container from 'components/common/Container/Container';
import { ThemeContext, themes } from 'context/themeContext';
import ThemeSwitcher from 'components/ThemeSwitcher/ThemeSwitcher';

const STORAGE_KEY = 'contacts';

const App = () => {
  //theme switcher
  const [theme, setTheme] = useState(themes.light); //хранит текущую тему

  const toggleTheme = () =>
    setTheme(prevTheme =>
      prevTheme === themes.light ? themes.dark : themes.light,
    );
  // console.log(ThemeContext);
  console.log(theme);
  //theme switcher - end

  const [contacts, setContacts] = useState(
    () => storage.get(STORAGE_KEY) ?? [],
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    storage.save(STORAGE_KEY, contacts);
  }, [contacts]);

  const onSubmit = newContact => {
    const { id, name, number } = newContact;
    const isInContactList = contact => contact.name === newContact.name;

    contacts.some(isInContactList)
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts(contacts => [...contacts, { id, name, number }]);
  };

  const onChangeInput = e => {
    setFilter(e.target.value);
  };

  const onFilterChange = () => {
    const value = filter;
    return contacts.filter(elem =>
      elem.name.toLowerCase().includes(value.toLowerCase()),
    );
  };

  const deleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(elem => elem.id !== id));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === themes.light ? s.lightTheme : s.darkTheme}>
        {/* <div className={s.wrap}> */}
        <Container>
          <ThemeSwitcher />
          <img className={s.image} src={image} alt="Woman" />
          <div className={s.contantWrap}>
            <h1 className={s.title}>Phonebook</h1>
            <div className={s.wrap}>
              <ContactForm onSubmitForm={onSubmit} contacts={contacts} />
            </div>
            <h2 className={s.subtitle}>Contacts:</h2>
            {contacts.length > 1 && (
              <Filter value={filter} onChange={onChangeInput} />
            )}
            {!contacts.length && <span>There are not contacts yet</span>}
            <ContactList contacts={onFilterChange()} onDelete={deleteContact} />
          </div>
        </Container>
      </div>
    </ThemeContext.Provider>
  );
};
export default App;
