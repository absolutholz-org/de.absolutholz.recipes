import Link from "next/link";
import { IBreadcrumbs } from "./Breadcrumbs.types";
import { Icon } from "../Icon";

export function Breadcrumbs({}: IBreadcrumbs): JSX.Element {
  return (
    <nav aria-label="breadcrumbs">
      {/* https://medium.com/@havard.brynjulfsen/removing-list-style-on-lists-and-the-accessibility-implications-that-follow-2392f5ddb332 */}
      {/* https://developer.mozilla.org/en-US/docs/Web/CSS/list-style */}
      <ol className="list-none" role="list">
        <li>
          <Link href="/">
            <Icon src="home" label="absolutholz Recipes homepage" />
          </Link>
        </li>
      </ol>
    </nav>
  );
}
