import { IPageHeadline } from './PageHeadline.types';

export function PageHeadline({ text }: IPageHeadline): JSX.Element {
  return <h1 className="text-4xl mt-10 mb-6">{text}</h1>;
}
