import { Card } from '../Card/Card';

export const Gallery = ({ items }) => {
  return (
    <ul>
      {items.map(el => (
        <li key={el.id}>
          <Card car={el} />
        </li>
      ))}
    </ul>
  );
};
