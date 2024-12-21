import { RecipeTileList } from "@/app/components/RecipeTileList";
import { SectionHeadline } from "@/app/components/SectionHeadline";
import { Category, Recipe } from "@/app/Recipe.type";
import { PageContainer } from "@/components/PageContainer";
import { PageHeader } from "@/components/PageHeader";
import { SiteHeadTitle } from "@/components/SiteHeadTitle";
import {
  CategoriesWithCount,
  getAllRecipeCategories,
  getAllRecipes,
} from "@/lib/recipes";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

type Props = {
  category: Category;
  recipes: Recipe[];
};

interface Params extends ParsedUrlQuery {
  category: string;
}

export const getStaticPaths = (async () => {
  const categories: CategoriesWithCount = getAllRecipeCategories();
  return {
    paths: Object.keys(categories).map((slug) => ({ params: { slug } })),
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { slug } = context.params as Params;
  const recipes = getAllRecipes().filter(({ category }) => category === slug);

  return { props: { category: slug as Category, recipes } };
}) satisfies GetStaticProps<Props>;

export default function Page({ category, recipes }: Props) {
  if (!recipes || !category) return null;

  return (
    <>
      <Head>
        <title>
          Recipes from the category: {category} @ absolutholz Recipes
        </title>
        <SiteHeadTitle />
      </Head>
      <main>
        <PageHeader h1={category} />

        <PageContainer>
          <div className="py-8">
            <SectionHeadline text="Recipes" />
            <RecipeTileList recipes={recipes} />
          </div>
        </PageContainer>
      </main>
    </>
  );
}
