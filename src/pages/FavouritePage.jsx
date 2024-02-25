import { Link } from 'react-router-dom';
import { Gallery } from '../components/Gallery/Gallery';
import { useSelector } from 'react-redux';
import { selectFavourite } from '../redux/favourite/selectors';

export default function FavouritePage() {
  const favourite = useSelector(selectFavourite);
  return (
    <>
      <div>FavouritePage</div>
      <Link to={'/catalog'}>To look throw the catalog</Link>
      <Gallery items={favourite} />
    </>
  );
}
