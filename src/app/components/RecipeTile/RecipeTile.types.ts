import { Category, Locale, RecipeImage } from "@/app/Recipe.type";

export type IRecipeTile = {
  name: string;
  category: Category;
  locale?: Locale;
  slug: string;
  ingredientCount: number;
  totalTime?: number;
  image?: RecipeImage;
};
