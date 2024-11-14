import Link from "next/link";
import { LayoutContainer } from "../LayoutContainer/LayoutContainer";
import { Logo } from "../Logo";
import { ISiteHeader } from "./SiteHeader.types";

export function SiteHeader({}: ISiteHeader): JSX.Element {
  return (
    <header className="py-4">
      <LayoutContainer>
        <Link className="flex items-center" href="/">
          <div className="mr-3">
            <Logo />
          </div>
          <div>
            <div className="text-lg leading-none">absolutholz</div>
            <div className="text-2xl leading-none">Recipes</div>
          </div>
        </Link>
      </LayoutContainer>
    </header>
  );
}
