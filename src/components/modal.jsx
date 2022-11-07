import React from 'react';

function Modal({ children }) {
  return (
    <div className="modal">
      <div className="modal-box">
        <img alt="большая и радостная картинка" />
        {children}
      </div>
    </div>
  );
}

export default Modal;
