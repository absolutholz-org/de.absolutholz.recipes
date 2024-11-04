import { LayoutContainer } from "../LayoutContainer/LayoutContainer";
import { ISiteFooter } from "./SiteFooter.types";
import { Breadcrumbs } from "../Breadcrumbs";

export function SiteFooter({}: ISiteFooter): JSX.Element {
  return (
    <footer className="py-4">
      <LayoutContainer>
        <Breadcrumbs />
      </LayoutContainer>
    </footer>
  );
}
