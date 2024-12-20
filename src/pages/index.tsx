import { RecipeTileList } from "@/app/components/RecipeTileList";
import { SectionHeadline } from "@/app/components/SectionHeadline";
import { Category, Recipe } from "@/app/Recipe.type";
import { BadgeList } from "@/components/BadgeList";
import { PageContainer } from "@/components/PageContainer";
import { PageHeader } from "@/components/PageHeader";
import { CategoryColor, categoryColors } from "@/data-structures/Category";
import {
  CategoriesWithCount,
  getAllRecipeCategories,
  getAllRecipes,
  getAllRecipeTags,
} from "@/lib/recipes";

export function getCategoryColors(category: Category): CategoryColor {
  return categoryColors[category];
}

export async function getStaticProps() {
  return {
    props: {
      recipes: getAllRecipes(),
      categories: getAllRecipeCategories(),
      tags: getAllRecipeTags(),
    },
  };
}

export default function Page({
  recipes,
  tags,
  categories,
}: {
  recipes: Recipe[];
  tags: string[];
  categories: CategoriesWithCount;
}) {
  return (
    <main>
      <PageHeader h1="Recipes" />

      <PageContainer>
        <div className="py-8">
          <RecipeTileList recipes={recipes} />

          <SectionHeadline text="Categories" />
          <BadgeList
            badges={Object.entries(categories).map(([category, count]) => ({
              text: category,
              href: {
                pathname: "/categories/[slug]",
                query: { slug: category },
              },
              color: {
                bg: getCategoryColors(category as Category).bg,
                border: getCategoryColors(category as Category).border,
                text: getCategoryColors(category as Category).text,
              },
              count,
            }))}
          />

          <SectionHeadline text="Tags" />
          <BadgeList
            badges={tags.map((tag) => ({
              text: tag,
              href: {
                pathname: "/tags/[slug]",
                query: { slug: tag },
              },
              color: {
                bg: "bg-indigo-500",
                border: "border-indigo-500",
                text: "text-indigo-500",
              },
            }))}
          />
        </div>
      </PageContainer>
    </main>
  );
}
