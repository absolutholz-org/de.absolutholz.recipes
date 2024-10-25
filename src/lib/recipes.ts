import { Category, Recipe } from '@/app/Recipe.type';
import * as fs from 'fs';
import path from 'path';

export function getAllRecipes(): Recipe[] {
  const dataDirectory = path.join(process.cwd(), 'src/app/data');
  const fileNames = fs.readdirSync(dataDirectory);
  const recipes: Recipe[] = [];

  fileNames.forEach((fileName) => {
    if (fileName.endsWith('.json')) {
      const filePath = path.join(dataDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const recipe = JSON.parse(fileContents);
      recipe.slug = fileName.replace(/\.json$/, '');
      recipes.push(recipe);
    }
  });

  return recipes;
}

export function getRecipe(slug: string): Recipe {
  const dataDirectory = path.join(process.cwd(), 'src/app/data');
  const filePath = path.join(dataDirectory, `${slug}.json`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const recipe = JSON.parse(fileContents);
  recipe.slug = slug;

  return recipe;
}

export function getAllRecipeSlugs(): string[] {
  const dataDirectory = path.join(process.cwd(), 'src/app/data');
  const fileNames = fs.readdirSync(dataDirectory);

  return fileNames.map((fileName) => {
    return fileName.replace(/\.json$/, '');
  });
}

export type CategoriesWithCount = Partial<Record<Category, number>>;

export function getAllRecipeCategories(): CategoriesWithCount {
  const dataDirectory = path.join(process.cwd(), 'src/app/data');
  const fileNames = fs.readdirSync(dataDirectory);

  const uniqueCategories: CategoriesWithCount = {};

  fileNames.forEach((fileName) => {
    if (fileName.endsWith('.json')) {
      const filePath = path.join(dataDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const recipe = JSON.parse(fileContents);
      const { category } = recipe as Recipe;

      if (category) {
        if (!uniqueCategories[category]) {
          uniqueCategories[category] = 1;
        } else {
          uniqueCategories[category] = uniqueCategories[category] + 1;
        }
      }
    }
  });

  return uniqueCategories;
}

export function getAllRecipeTags(): string[] {
  const dataDirectory = path.join(process.cwd(), 'src/app/data');
  const fileNames = fs.readdirSync(dataDirectory);

  const uniqueTags = new Set();

  fileNames.forEach((fileName) => {
    if (fileName.endsWith('.json')) {
      const filePath = path.join(dataDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const recipe = JSON.parse(fileContents);
      const { tags } = recipe as Recipe;

      if (tags) {
        tags.forEach((tag) => uniqueTags.add(tag));
      }
    }
  });

  return Array.from(uniqueTags) as string[];
}

export function getAllRecipeIngredients(): string[] {
  const dataDirectory = path.join(process.cwd(), 'src/app/data');
  const fileNames = fs.readdirSync(dataDirectory);

  const uniqueIngredients = new Set();

  fileNames.forEach((fileName) => {
    if (fileName.endsWith('.json')) {
      const filePath = path.join(dataDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const recipe = JSON.parse(fileContents);
      const { ingredients } = recipe as Recipe;

      if (ingredients) {
        ingredients.forEach((ingredient) =>
          uniqueIngredients.add(ingredient.name)
        );
      }
    }
  });

  return Array.from(uniqueIngredients).sort() as string[];
}

export function getAllRecipeUnits(): string[] {
  const dataDirectory = path.join(process.cwd(), 'src/app/data');
  const fileNames = fs.readdirSync(dataDirectory);

  const uniqueUnits = new Set();

  fileNames.forEach((fileName) => {
    if (fileName.endsWith('.json')) {
      const filePath = path.join(dataDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const recipe = JSON.parse(fileContents);
      const { ingredients } = recipe as Recipe;

      if (ingredients) {
        ingredients.forEach((ingredient) => {
          if (ingredient.unit) {
            uniqueUnits.add(ingredient.unit);
          }
        });
      }
    }
  });

  return Array.from(uniqueUnits).sort() as string[];
}
