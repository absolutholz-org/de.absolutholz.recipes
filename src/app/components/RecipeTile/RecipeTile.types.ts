import { Category } from '@/app/Recipe.type';

export type IRecipeTile = {
  name: string;
  category: Category;
  locale?: string;
  slug: string;
  ingredientCount: number;
  totalTime?: number;
  image?: string;
};
