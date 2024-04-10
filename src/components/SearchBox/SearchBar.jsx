import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice.js';
import css from './SearchBar.module.css';

const SearchBar = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.searchBar}>
      <label className={css.label}>
        Find contacts by name or number
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBar;
