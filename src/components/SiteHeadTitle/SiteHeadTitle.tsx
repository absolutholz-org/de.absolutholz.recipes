import { ISiteHeadTitle } from "./SiteHeadTitle.types";

export function SiteHeadTitle({}: ISiteHeadTitle): JSX.Element {
  return (
    <>
      <meta
        name="description"
        content="A little collection of tasty things I like to make."
      />
    </>
  );
}
