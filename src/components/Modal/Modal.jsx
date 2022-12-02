import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

export class Modal extends Component {
  static defaultProps = {
    removeImageToOpen: () => {},
  };

  static propTypes = {
    children: PropTypes.node,
    removeImageToOpen: PropTypes.func,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  closeModal = e => {
    if (e.code === 'Escape') {
      this.props.removeImageToOpen();
    }
  };

  closeModalByClick = e => {
    if (e.currentTarget.isEqualNode(e.target)) {
      this.props.removeImageToOpen();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  render() {
    const { children } = this.props;

    return (
      <div className={s.Overlay} onClick={this.closeModalByClick}>
        <div className={s.Modal}>{children}</div>
      </div>
    );
  }
}

export default Modal;
