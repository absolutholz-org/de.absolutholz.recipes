import { Badge } from '../../../components/Badge';
import { ICategoryList } from './CategoryList.types';

export function CategoryList({ categories }: ICategoryList): JSX.Element {
  return (
    <ul className="list-none flex flex-wrap gap-2 my-3">
      {categories.map(({ name, color, count, href }) => (
        <li key={name}>
          <Badge text={name} href={href} color={color} count={count} />
        </li>
      ))}
    </ul>
  );
}
