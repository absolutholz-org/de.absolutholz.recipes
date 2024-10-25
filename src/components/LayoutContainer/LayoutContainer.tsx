import { ILayoutContainer } from './LayoutContainer.types';

export function LayoutContainer({ children }: ILayoutContainer): JSX.Element {
  return <div className="container mx-auto px-4">{children}</div>;
}
