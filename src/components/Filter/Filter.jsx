import { useEffect, useRef } from 'react';
import s from './Filter.module.css';

// import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <label className={s.label}>
        <span className={s.title}>Find contacts by name</span>
        <input
          ref={inputRef}
          className={s.textField}
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
