export type Unit = "TL" | "EL" | "g" | "ml" | "pinch";

export type Locale = "de" | "es" | "en" | "fr";

export type Category =
  | "appetizers"
  | "drinks"
  | "mains"
  | "salads"
  | "sandwiches"
  | "sauces"
  | "seasonings"
  | "sides"
  | "soups"
  | "sweets";

type Ingredient = {
  name: string;
  quantity?: number;
  unit?: Unit;
  optional?: boolean;
  notes?: string;
};

export type RecipeImage = {
  src: string;
  alt: string;
};

export type Recipe = {
  slug: string;
  name: string;
  category: Category;
  locale?: Locale;
  ingredients: Ingredient[];
  instructions: string[];
  description?: string;
  images?: RecipeImage[];
  links?: string[];
  tags?: string[];
  prep_time?: number;
  cook_time?: number;
  servings?: number;
  notes?: string;
  language?: string;
};
