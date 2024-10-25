import { PageHeadline } from '@/app/components/PageHeadline';
import { BadgeList } from '@/components/BadgeList';
import { getAllRecipeTags } from '@/lib/recipes';

export async function getStaticProps() {
  return {
    props: {
      tags: getAllRecipeTags(),
    },
  };
}

export default function Page({ tags }: { tags: string[] }) {
  return (
    <main className="container mx-auto px-4">
      <PageHeadline text="Tags" />

      <BadgeList
        badges={tags.map((tag) => ({
          text: tag,
          href: {
            pathname: '/tags/[slug]',
            query: { slug: tag },
          },
          color: {
            bg: 'bg-indigo-500',
            border: 'border-indigo-500',
            text: 'text-indigo-500',
          },
        }))}
      />
    </main>
  );
}
