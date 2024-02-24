import Modal from 'react-modal';
import { useState } from 'react';

import { ExtraInfo } from '../ExtraInfo/ExtraInfo';
import { customStyles } from './Card.styled';

export const Card = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <div>Card</div>
      <button type="button" onClick={openModal}>
        Learn more
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Extra Info Modal"
      >
        <ExtraInfo />
      </Modal>
    </>
  );
};
