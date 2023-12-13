import { Component } from 'react'
import css from './Modal.module.css'

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

   handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      this.props.onCloseModal();
    }
  };
  render() {
    return (

      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src={this.props.item.largeImageURL} alt={this.props.item.tag} />
        </div>
      </div>
    )
  }
}
