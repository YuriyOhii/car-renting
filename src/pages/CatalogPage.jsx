import { Link } from 'react-router-dom';
import { Filters } from '../components/Filters/Filters';
import { Gallery } from '../components/Gallery/Gallery';
export default function CatalogPage() {
  return (
    <>
      <div>CatalogPage</div>
      <Link to={'/favourite'}>To look throw the favorites</Link>
      <Filters />
      <Gallery />
    </>
  );
}
