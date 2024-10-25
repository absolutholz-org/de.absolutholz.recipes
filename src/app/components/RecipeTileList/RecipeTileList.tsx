import { RecipeTile } from '../RecipeTile';
import { IRecipeTileList } from './RecipeTileList.types';

export function RecipeTileList({ recipes }: IRecipeTileList): JSX.Element {
  return (
    <ul
      className="list-none columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 gap-6"
      role="list"
    >
      {recipes.map(
        ({
          name,
          category,
          locale,
          slug,
          images,
          ingredients,
          prep_time,
          cook_time,
        }) => (
          <li key={slug} className="break-inside-avoid-column mb-6">
            <RecipeTile
              name={name}
              category={category}
              locale={locale}
              slug={slug}
              image={images && images[0]}
              ingredientCount={ingredients.length}
              totalTime={(prep_time || 0) + (cook_time || 0)}
            />
          </li>
        )
      )}
    </ul>
  );
}
