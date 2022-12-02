import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.module.css';

const Button = ({ loadMore = () => {} }) => {
  return (
    <div onClick={loadMore} className={s.Button}>
      Load More
    </div>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
