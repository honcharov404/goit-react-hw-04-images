import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

const Modal = ({ removeImageToOpen = () => {}, children }) => {
  const closeModal = useCallback(e => {
    if (e.code === 'Escape') {
      removeImageToOpen();
    }
  }, [removeImageToOpen]);

  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => window.removeEventListener('keydown', closeModal);
  }, [closeModal]);

  const closeModalByClick = e => {
    if (e.currentTarget.isEqualNode(e.target)) {
      removeImageToOpen();
    }
  };

  return (
    <div className={s.Overlay} onClick={closeModalByClick}>
      <div className={s.Modal}>{children}</div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  removeImageToOpen: PropTypes.func.isRequired,
};

export default Modal;
