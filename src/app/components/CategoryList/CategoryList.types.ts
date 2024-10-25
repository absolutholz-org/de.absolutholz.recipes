import { Category } from '@/app/Recipe.type';

export type ICategoryList = {
  categories: {
    name: Category;
    color: {
      bg: string;
      border: string;
      text: string;
    };
    count?: number;
    href?: string;
  }[];
};
