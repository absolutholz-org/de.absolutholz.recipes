import Link from "next/link";
import { IRecipeTile } from "./RecipeTile.types";
import { Category } from "@/app/Recipe.type";
import { Icon } from "@/components/Icon";
import { FlagIcon } from "@/components/FlagIcon/FlagIcon";

type CategoryColor = {
  border: string;
  bg: string;
  text: string;
};

const categoryColors: Record<Category, CategoryColor> = {
  appetizers: {
    border: "border-pink-600",
    bg: "bg-pink-600",
    text: "text-pink-600",
  },
  drinks: {
    border: "border-blue-600",
    bg: "bg-blue-600",
    text: "text-blue-600",
  },
  "main dishes": {
    border: "border-orange-600",
    bg: "bg-orange-600",
    text: "text-orange-600",
  },
  salads: {
    border: "border-orange-600",
    bg: "bg-orange-600",
    text: "text-orange-600",
  },
  sandwiches: {
    border: "border-green-600",
    bg: "bg-green-600",
    text: "text-green-600",
  },
  sauces: { border: "border-red-600", bg: "bg-red-600", text: "text-red-600" },
  seasonings: {
    border: "border-yellow-600",
    bg: "bg-yellow-600",
    text: "text-yellow-600",
  },
  sides: {
    border: "border-teal-600",
    bg: "bg-teal-600",
    text: "text-teal-600",
  },
  soups: {
    border: "border-orange-600",
    bg: "bg-orange-600",
    text: "text-orange-600",
  },
  sweets: {
    border: "border-violet-600",
    bg: "bg-violet-600",
    text: "text-violet-600",
  },
};

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
  return (
    <article className="relative">
      <div
        className={`rounded-lg ${colors.bg} text-white px-2 pt-1 pb-3 rounded-b-none -mb-2 text-sm`}
      >
        {category}
      </div>
      <div
        className={`rounded-lg ${colors.border} border-2 bg-white dark:bg-black text-black dark:text-white`}
      >
        {image && (
          <div className="rounded-md m-1 overflow-clip">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              className="xaspect-video object-cover"
              alt={image?.alt}
              loading="lazy"
            />
          </div>
        )}
        <div className="m-2">
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
