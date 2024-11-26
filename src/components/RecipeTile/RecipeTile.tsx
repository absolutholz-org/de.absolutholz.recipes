import Link from "next/link";
import { IRecipeTile } from "./RecipeTile.types";
import { Category } from "@/app/Recipe.type";
import { Icon } from "@/components/Icon";
import { FlagIcon } from "@/components/FlagIcon/FlagIcon";
import { CategoryColor, categoryColors } from "@/data-structures/Category";

export function getCategoryColors(category: Category): CategoryColor {
  return categoryColors[category];
}

export function RecipeTile({
  name,
  category,
  locale,
  slug,
  image,
  ingredientCount,
  totalTime,
}: IRecipeTile): JSX.Element {
  const colors = getCategoryColors(category);
  console.log({ colors });
  return (
    <article
      className={`relative rounded-lg ${colors.text} p-1`}
      style={colors.pattern}
    >
      <div className="text-white px-1 py-1 text-sm uppercase font-semibold">
        {category}
      </div>
      {image && (
        <div className="rounded-md p-1 overflow-clip bg-white dark:bg-black mb-1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            className="xaspect-video rounded-md object-cover"
            alt={image?.alt}
            loading="lazy"
          />
        </div>
      )}
      <div
        className={`rounded-lg bg-white dark:bg-black text-black dark:text-white`}
      >
        <div className="p-1">
          <h3 className="text-md capitalize">
            <Link
              href={{
                pathname: "/recipes/[slug]",
                query: { slug: slug },
              }}
              hrefLang={locale}
              className="after:absolute after:inset-0"
            >
              {name}
              <span className="text-lg">
                {locale === "es" && (
                  <FlagIcon src="es" label="This recipe is in spanish" />
                )}
                {locale === "de" && (
                  <FlagIcon src="de" label="This recipe is in german" />
                )}
                {locale === "fr" && (
                  <FlagIcon src="fr" label="This recipe is in french" />
                )}
              </span>
            </Link>
          </h3>
          <div className="flex gap-3">
            <span className="flex items-center gap-x-1 text-sm">
              <Icon src="utensils" label="Ingredients" />
              {ingredientCount}
            </span>
            {totalTime && (
              <span className="flex items-center gap-x-1 text-sm">
                <Icon src="clock" label="Time required (in minutes)" />
                {totalTime}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
