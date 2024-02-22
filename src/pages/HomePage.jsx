import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <ul>
        <li>
          <Link to={'catalog'}>To look throw the catalog</Link>
        </li>
        <li>
          <Link to={'favourite'}>To look throw the favourites</Link>
        </li>
      </ul>
    </>
  );
}
