import { Link } from 'react-router-dom';

export default function FavouritePage() {
  return (
    <>
      <div>FavouritePage</div>
      <Link to={'/catalog'}>To look throw the catalog</Link>
    </>
  );
}
