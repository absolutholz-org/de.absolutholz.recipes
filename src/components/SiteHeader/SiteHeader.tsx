import Link from 'next/link';
import { LayoutContainer } from '../LayoutContainer/LayoutContainer';
import { ISiteHeader } from './SiteHeader.types';

export function SiteHeader({}: ISiteHeader): JSX.Element {
  return (
    <header className="py-4">
      <LayoutContainer>
        <div>
          <Link href="/">Home</Link>
        </div>
      </LayoutContainer>
    </header>
  );
}
