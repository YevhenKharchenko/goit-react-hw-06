import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice.js';
import css from './SearchBar.module.css';

const SearchBar = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  return (
    <div className={css.searchBar}>
      <label className={css.label}>
        Find contacts by name or number
        <input
          className={css.input}
          type="text"
          value={value}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBar;
