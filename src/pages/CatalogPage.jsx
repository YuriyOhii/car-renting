import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { fetchCars } from '../redux/cars/operations';
import { Filters } from '../components/Filters/Filters';
import { Gallery } from '../components/Gallery/Gallery';
import { selectCars } from '../redux/cars/selectors';
export default function CatalogPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  const cars = useSelector(selectCars);
  return (
    <>
      <div>CatalogPage</div>
      <Link to={'/favourite'}>To look throw the favorites</Link>
      <Filters />
      <Gallery items={cars} />
    </>
  );
}
