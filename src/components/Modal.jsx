/* eslint-disable react/button-has-type */
import React, { useState } from 'react';

const Modal = ({ ingredients }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen mt-16 mb-16 ml-auto mr-auto bg-black bg-opacity-5 modal-bg">
      <div className="w-1/3 h-auto p-5 bg-gray-100 rounded-lg modal-container">
        <div className="m-2 mb-5 font-mono text-2xl font-bold text-center text-gray-600 modal-header">
          Ingredients:{' '}
        </div>
        <div className="modal-content">
          <div className="text-center modal-body">
            <ul>
              {ingredients.length !== 0
                ? ingredients.map((ingredient) => (
                    <li
                      key={ingredient}
                      className="text-xl text-left text-gray-600"
                    >
                      {`- ${ingredient}`}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
