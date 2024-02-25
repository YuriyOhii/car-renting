import { Link } from 'react-router-dom';
import { Gallery } from '../components/Gallery/Gallery';
import { useSelector } from 'react-redux';
import { selectFavouriteCars } from '../redux/favourite/selectors';

export default function FavouritePage() {
  const favouriteCars = useSelector(selectFavouriteCars);
  return (
    <>
      <div>FavouritePage</div>
      <Link to={'/catalog'}>To look throw the catalog</Link>
      <Gallery items={favouriteCars} />
    </>
  );
}
