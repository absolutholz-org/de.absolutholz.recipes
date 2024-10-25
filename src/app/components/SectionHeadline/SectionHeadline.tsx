import { ISectionHeadline } from './SectionHeadline.types';

export function SectionHeadline({ text }: ISectionHeadline): JSX.Element {
  return <h1 className="text-2xl mt-8 mb-4">{text}</h1>;
}
