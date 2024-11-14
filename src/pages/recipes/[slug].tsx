import { SectionHeadline } from "@/app/components/SectionHeadline";
import { Category, Recipe } from "@/app/Recipe.type";
import { BadgeList } from "@/components/BadgeList";
import { PageHeader } from "@/components/PageHeader";
import { SiteHeadTitle } from "@/components/SiteHeadTitle";
import { getAllRecipeSlugs, getRecipe } from "@/lib/recipes";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import Markdown from "react-markdown";
import { getCategoryColors } from "..";

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths = (async () => {
  const slugs = getAllRecipeSlugs();
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { slug } = context.params as Params;
  const recipe = getRecipe(slug);

  return { props: { recipe } };
}) satisfies GetStaticProps<{
  recipe: Recipe;
}>;

export default function Page({ recipe }: { recipe: Recipe }) {
  return (
    <>
      <Head>
        <SiteHeadTitle title={recipe.name} />
      </Head>
      <main>
        <PageHeader h1={recipe.name} />

        <div className="container mx-auto px-4 py-8">
          <SectionHeadline text="Category" />
          <BadgeList
            badges={[
              {
                text: recipe.category,
                href: {
                  pathname: "/categories/[slug]",
                  query: { slug: recipe.category },
                },
                color: {
                  bg: getCategoryColors(recipe.category as Category).bg,
                  border: getCategoryColors(recipe.category as Category).border,
                  text: getCategoryColors(recipe.category as Category).text,
                },
              },
            ]}
          />

          {recipe.tags && (
            <>
              <SectionHeadline text="Tags" />
              <BadgeList
                badges={recipe.tags.map((tag) => ({
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
                  size: "small",
                }))}
              />
            </>
          )}

          {recipe.description && (
            <>
              <SectionHeadline text="Description" />
              <Markdown>{recipe.description}</Markdown>
            </>
          )}

          {recipe.ingredients && (
            <>
              <SectionHeadline text="Ingredients" />
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li key={ingredient.name}>
                    {ingredient.quantity && <span>{ingredient.quantity} </span>}
                    {ingredient.unit && <span>{ingredient.unit} </span>}
                    <span>{ingredient.name}</span>
                    {ingredient.notes && (
                      <span>
                        <Markdown>{ingredient.notes}</Markdown>
                      </span>
                    )}
                    {ingredient.optional && <span> (optional)</span>}
                  </li>
                ))}
              </ul>
            </>
          )}

          {recipe.instructions && (
            <>
              <SectionHeadline text="Instructions" />
              <ol>
                {recipe.instructions.map((instruction) => (
                  <li key={instruction}>
                    <Markdown>{instruction}</Markdown>
                  </li>
                ))}
              </ol>
            </>
          )}

          {recipe.notes && (
            <>
              <SectionHeadline text="Notes" />
              <Markdown>{recipe.notes}</Markdown>
            </>
          )}

          {recipe.links && (
            <>
              <SectionHeadline text="Links" />
              <ul>
                {recipe.links.map((link) => (
                  <li key={link}>
                    <a href={link} rel="noopener noreferrer" target="_blank">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </>
  );
}
