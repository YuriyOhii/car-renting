import { Link } from 'react-router-dom';
import { Gallery } from '../components/Gallery/Gallery';

export default function FavouritePage() {
  return (
    <>
      <div>FavouritePage</div>
      <Link to={'/catalog'}>To look throw the catalog</Link>
      <Gallery />
    </>
  );
}
