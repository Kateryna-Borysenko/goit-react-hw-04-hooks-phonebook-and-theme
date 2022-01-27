import s from './Filter.module.css';
// import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label className={s.label}>
        <span className={s.title}>Find contacts by name</span>
        <input
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
