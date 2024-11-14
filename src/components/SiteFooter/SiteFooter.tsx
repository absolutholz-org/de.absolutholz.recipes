import { ISiteFooter } from "./SiteFooter.types";
import { Breadcrumbs } from "../Breadcrumbs";
import { PageContainer } from "../PageContainer";

export function SiteFooter({}: ISiteFooter): JSX.Element {
  return (
    <footer className="py-4">
      <PageContainer>
        <Breadcrumbs />
      </PageContainer>
    </footer>
  );
}
