import { Badge } from '../Badge';
import { IBadgeList } from './BadgeList.types';

export function BadgeList({ badges }: IBadgeList): JSX.Element {
  return (
    <ul className="list-none flex flex-wrap gap-2 my-3" role="list">
      {badges.map((badge) => (
        <li key={badge.text}>
          <Badge {...badge} />
        </li>
      ))}
    </ul>
  );
}
