import { BadgeList } from "@/components/BadgeList";
import { PageHeader } from "@/components/PageHeader";
import { getAllRecipeTags } from "@/lib/recipes";

export async function getStaticProps() {
  return {
    props: {
      tags: getAllRecipeTags(),
    },
  };
}

export default function Page({ tags }: { tags: string[] }) {
  return (
    <main>
      <PageHeader h1="Tags" />

      <div className="container mx-auto px-4 py-8">
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
    </main>
  );
}
