import { useEffect, useRef, useContext } from 'react';
import s from './Filter.module.css';

import { ThemeContext, themes } from 'context/themeContext';

// import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  const { theme } = useContext(ThemeContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <label className={s.label}>
        {/* <span className={s.title}>Find contacts by name</span> */}
        <span
          className={
            theme === themes.light ? s.lightThemeTitle : s.darkThemeTitle
          }
        >
          Find contacts by name
        </span>
        <input
          ref={inputRef}
          className={
            theme === themes.light ? s.lightTextField : s.darkTextField
          }
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          placeholder="example: Nina"
        />
      </label>
    </div>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   label: PropTypes.string,
//   onFilterChange: PropTypes.func.isRequired,
// };

export default Filter;
