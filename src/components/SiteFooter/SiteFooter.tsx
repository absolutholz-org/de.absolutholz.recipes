import Link from 'next/link';
import { LayoutContainer } from '../LayoutContainer/LayoutContainer';
import { ISiteFooter } from './SiteFooter.types';

export function SiteFooter({}: ISiteFooter): JSX.Element {
  return (
    <footer className="py-4">
      <LayoutContainer>
        <Link href="/">Home</Link>
      </LayoutContainer>
    </footer>
  );
}
