import { Category } from '@/app/Recipe.type';

export type IRecipeTile = {
  name: string;
  category: Category;
  locale?: 'de' | 'es' | 'en';
  slug: string;
  ingredientCount: number;
  totalTime?: number;
  image?: string;
};
