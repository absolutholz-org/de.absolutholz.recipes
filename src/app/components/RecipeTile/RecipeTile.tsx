import Link from 'next/link';
import { IRecipeTile } from './RecipeTile.types';
import { Category } from '@/app/Recipe.type';

type CategoryColor = {
  border: string;
  bg: string;
  text: string;
};

const categoryColors: Record<Category, CategoryColor> = {
  appetizers: {
    border: 'border-pink-600',
    bg: 'bg-pink-600',
    text: 'text-pink-600',
  },
  drinks: {
    border: 'border-blue-600',
    bg: 'bg-blue-600',
    text: 'text-blue-600',
  },
  'main dishes': {
    border: 'border-orange-600',
    bg: 'bg-orange-600',
    text: 'text-orange-600',
  },
  salads: {
    border: 'border-orange-600',
    bg: 'bg-orange-600',
    text: 'text-orange-600',
  },
  sandwiches: {
    border: 'border-green-600',
    bg: 'bg-green-600',
    text: 'text-green-600',
  },
  sauces: { border: 'border-red-600', bg: 'bg-red-600', text: 'text-red-600' },
  seasonings: {
    border: 'border-yellow-600',
    bg: 'bg-yellow-600',
    text: 'text-yellow-600',
  },
  sides: {
    border: 'border-teal-600',
    bg: 'bg-teal-600',
    text: 'text-teal-600',
  },
  soups: {
    border: 'border-orange-600',
    bg: 'bg-orange-600',
    text: 'text-orange-600',
  },
  sweets: {
    border: 'border-violet-600',
    bg: 'bg-violet-600',
    text: 'text-violet-600',
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
    <article>
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
            <img
              src={image}
              className="xaspect-video object-cover"
              alt=""
              loading="lazy"
            />
          </div>
        )}
        <div className="m-2">
          <h3 className="text-md capitalize">
            <Link
              href={{
                pathname: '/recipes/[slug]',
                query: { slug: slug },
              }}
              hrefLang={locale}
            >
              {name}
              <span>
                {locale === 'es' && (
                  <svg viewBox="0 0 6 4" className="w-4">
                    <title>This recipe is in spanish</title>
                    <path fill="#ad1519" d="M0 0h6v4H0z" />
                    <path fill="#fabd00" d="M0 1h6v2H0z" />
                  </svg>
                )}
                {locale === 'de' && (
                  <svg viewBox="0 0 5 3" className="w-4">
                    <title>This recipe is in german</title>
                    <path fill="#000" d="M0 0h5v3H0z" />
                    <path fill="#D00" d="M0 1h5v2H0z" />
                    <path fill="#FFCE00" d="M0 2h5v1H0z" />
                  </svg>
                )}
              </span>
            </Link>
          </h3>
          <div className="flex gap-3">
            <span className="flex items-center gap-x-1 text-sm">
              {/* https://mui.com/material-ui/material-icons/?query=food&selected=RestaurantMenu */}
              <svg
                className="text-lg"
                focusable="false"
                aria-hidden="true"
                aria-label="Ingredients"
                viewBox="0 0 24 24"
                height="1em"
              >
                <path d="m8.1 13.34 2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13z"></path>
              </svg>
              {ingredientCount}
            </span>
            {totalTime && (
              <span className="flex items-center gap-x-1 text-sm">
                <svg
                  className="text-lg"
                  focusable="false"
                  aria-hidden="true"
                  aria-label="Time"
                  viewBox="0 0 24 24"
                  height="1em"
                >
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"></path>
                  <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path>
                </svg>
                {totalTime}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
