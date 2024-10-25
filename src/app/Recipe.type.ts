export type Unit = 'TL' | 'EL' | 'g' | 'ml' | 'pinch';

export type Category =
  | 'appetizers'
  | 'drinks'
  | 'main dishes'
  | 'salads'
  | 'sandwiches'
  | 'sauces'
  | 'seasonings'
  | 'sides'
  | 'soups'
  | 'sweets';

type Ingredient = {
  name: string;
  quantity?: number;
  unit?: Unit;
  optional?: boolean;
  notes?: string;
};

export type Recipe = {
  slug: string;
  name: string;
  category: Category;
  locale?: string;
  ingredients: Ingredient[];
  instructions: string[];
  description?: string;
  images?: string[];
  links?: string[];
  tags?: string[];
  prep_time?: number;
  cook_time?: number;
  servings?: number;
  notes?: string;
  language?: string;
};
