import Modal from 'react-modal';
import { useState } from 'react';

import { ExtraInfo } from '../ExtraInfo/ExtraInfo';
import { customStyles } from './Card.styled';
import { useDispatch } from 'react-redux';
import { setFavourite } from '../../redux/favourite/favouriteSlice';

export const Card = ({ car }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <button type="button" onClick={() => dispatch(setFavourite(car.id))}>
        favourite
      </button>
      <img src={car.img} alt="Car" />
      <div>
        <h2>
          {car.make}
          {car.model}, {car.year}
        </h2>
        <p>{car.rentalPrice}</p>
      </div>
      <div>
        <span>{car.adress}</span>
        <span>{car.rentalCompany}</span>
        <span>{car.type}</span>
        <span>{car.make}</span>
        <span>{car.id}</span>
        <span>{car.functionalities[0]}</span>
      </div>
      <button type="button" onClick={openModal}>
        Learn more
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Extra Info Modal"
      >
        <ExtraInfo car={car} />
      </Modal>
    </>
  );
};
