import { useState, useContext } from 'react';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';

import { ThemeContext, themes } from 'context/themeContext';

const ContactForm = ({ onSubmitForm, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { theme } = useContext(ThemeContext);

  const onSubmit = e => {
    e.preventDefault();

    onSubmitForm({
      id: nanoid(),
      name,
      number,
    });
    reset();
  };

  const onChangeInput = e => {
    const { name, value } = e.target;

    switch (
      name //e.target.name
    ) {
      case 'name':
        setName(value); //e.target.value
        break;

      case 'number':
        setNumber(value); //e.target.value
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.contacsForm} onSubmit={onSubmit}>
      <label className={s.label}>
        <span className={theme === themes.light ? s.litghtTitle : s.darkTitle}>
          Name:
        </span>
        <input
          className={
            theme === themes.light ? s.lightTextField : s.darkTextField
          }
          type="text"
          onChange={onChangeInput}
          value={name}
          name="name"
          placeholder="example: Borysenko Kateryna"
          required
        />
      </label>

      <label className={s.label}>
        <span className={s.title}>Number:</span>
        <input
          className={
            theme === themes.light ? s.lightTextField : s.darkTextField
          }
          type="tel"
          onChange={onChangeInput}
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="example: +38(099)205-33-33"
          required
        />
      </label>

      <button type="submit" className={s.addBtn}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
