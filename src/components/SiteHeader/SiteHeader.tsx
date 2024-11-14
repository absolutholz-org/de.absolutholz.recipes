import Link from "next/link";
import { Logo } from "../Logo";
import { ISiteHeader } from "./SiteHeader.types";
import { PageContainer } from "../PageContainer";

export function SiteHeader({}: ISiteHeader): JSX.Element {
  return (
    <header className="py-4">
      <PageContainer>
        <Link className="flex items-center" href="/">
          <div className="mr-3">
            <Logo />
          </div>
          <div>
            <div className="text-lg leading-none">absolutholz</div>
            <div className="text-2xl leading-none">Recipes</div>
          </div>
        </Link>
      </PageContainer>
    </header>
  );
}
