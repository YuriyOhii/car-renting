import { Link } from 'react-router-dom';
export default function CatalogPage() {
  return (
    <>
      <div>CatalogPage</div>
      <Link to={'/favourite'}>To look throw the favorites</Link>
    </>
  );
}
