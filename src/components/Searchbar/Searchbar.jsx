import React from 'react';
import PropTypes from 'prop-types';

import s from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={onSubmit}>
        <button className={s.SearchFormButton} type="submit">
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={s.SearchFormInput}
          name="searchFormInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
