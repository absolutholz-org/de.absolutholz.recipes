import { PageHeadline } from '@/app/components/PageHeadline';
import { RecipeTileList } from '@/app/components/RecipeTileList';
import { SectionHeadline } from '@/app/components/SectionHeadline';
import { Recipe } from '@/app/Recipe.type';
import { SiteHeadTitle } from '@/components/SiteHeadTitle';
import { getAllRecipes, getAllRecipeTags } from '@/lib/recipes';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

type Props = {
  tag: string;
  recipes: Recipe[];
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths = (async () => {
  const tags = getAllRecipeTags();
  return {
    paths: tags.map((slug) => ({ params: { slug } })),
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { slug: tag } = context.params as Params;
  const recipes = getAllRecipes().filter((recipe) =>
    recipe.tags?.includes(tag)
  );

  return { props: { tag, recipes } };
}) satisfies GetStaticProps<Props>;

export default function Page({ tag, recipes }: Props) {
  return (
    <>
      <Head>
        <SiteHeadTitle title={`Recipes tagged with: ${tag}`} />
      </Head>
      <main className="container mx-auto px-4">
        <PageHeadline text={`Tag: ${tag}`} />

        <SectionHeadline text="Recipes" />
        <RecipeTileList recipes={recipes} />
      </main>
    </>
  );
}
