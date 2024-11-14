import { SectionHeadline } from "@/app/components/SectionHeadline";
import { Category } from "@/app/Recipe.type";
import { BadgeList } from "@/components/BadgeList";
import { PageHeader } from "@/components/PageHeader";
import { CategoriesWithCount, getAllRecipeCategories } from "@/lib/recipes";

type CategoryColor = {
  border: string;
  bg: string;
  text: string;
};

const categoryColors: Record<Category, CategoryColor> = {
  appetizers: {
    border: "border-pink-600",
    bg: "bg-pink-600",
    text: "text-pink-600",
  },
  drinks: {
    border: "border-blue-600",
    bg: "bg-blue-600",
    text: "text-blue-600",
  },
  "main dishes": {
    border: "border-orange-600",
    bg: "bg-orange-600",
    text: "text-orange-600",
  },
  salads: {
    border: "border-orange-600",
    bg: "bg-orange-600",
    text: "text-orange-600",
  },
  sandwiches: {
    border: "border-green-600",
    bg: "bg-green-600",
    text: "text-green-600",
  },
  sauces: { border: "border-red-600", bg: "bg-red-600", text: "text-red-600" },
  seasonings: {
    border: "border-yellow-600",
    bg: "bg-yellow-600",
    text: "text-yellow-600",
  },
  sides: {
    border: "border-teal-600",
    bg: "bg-teal-600",
    text: "text-teal-600",
  },
  soups: {
    border: "border-orange-600",
    bg: "bg-orange-600",
    text: "text-orange-600",
  },
  sweets: {
    border: "border-violet-600",
    bg: "bg-violet-600",
    text: "text-violet-600",
  },
};

export function getCategoryColors(category: Category): CategoryColor {
  return categoryColors[category];
}

export async function getStaticProps() {
  return {
    props: {
      categories: getAllRecipeCategories(),
    },
  };
}

export default function Page({
  categories,
}: {
  categories: CategoriesWithCount;
}) {
  return (
    <main>
      <PageHeader h1="Categories" />

      <div className="container mx-auto px-4 py-8">
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
      </div>
    </main>
  );
}
