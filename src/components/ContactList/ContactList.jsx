import s from './ContactList.module.css';
import Paper from 'components/common/Paper/Paper';
import { useContext } from 'react';

import { ThemeContext, themes } from 'context/themeContext';

const ContactList = ({ contacts, onDelete }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <Paper key={id}>
          <li className={s.contactListItem}>
            <p
              className={
                theme === themes.light
                  ? s.lightContactTitle
                  : s.darkContactTitle
              }
            >
              {name}:
            </p>
            <p
              className={
                theme === themes.light
                  ? s.lightContactTitle
                  : s.darkContactTitle
              }
            >
              {number}
            </p>
          </li>
          <button
            type="button"
            className={s.deleteBtn}
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </Paper>
      ))}
    </ul>
  );
};

export default ContactList;
