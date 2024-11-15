import { ISiteHeadTitle } from "./SiteHeadTitle.types";

export function SiteHeadTitle({ title }: ISiteHeadTitle): JSX.Element {
  return (
    <>
      {/* <title>
        {title}
        {title && " @ "}absolutholz Recipes
      </title> */}
      <meta
        name="description"
        content="A little collection of tasty things I like to make."
      />
    </>
  );
}
