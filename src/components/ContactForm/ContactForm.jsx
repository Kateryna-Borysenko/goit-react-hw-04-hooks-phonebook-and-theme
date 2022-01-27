import { useState } from 'react';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid';

const ContactForm = ({ onSubmitForm, contacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    onSubmitForm({
      id: nanoid(),
      name,
      number,
    });
    reset();
  };

  //Репета 17:09
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
        <span className={s.title}>Name:</span>
        <input
          className={s.textField}
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
          className={s.textField}
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
