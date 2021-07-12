/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="w-4/5 mt-16 mb-16 ml-auto mr-auto bg-gray-200 modal-container max-w-11/12">
      <div className="modal-header">test</div>
      <div className="modal-content">
        <div className="modal-body">body</div>
        <div className="modal-footer">footer</div>
      </div>
    </div>
  );
};

export default Modal;
