import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import { usePartialSection } from "deco/hooks/usePartialSection.ts";
import { ComponentChildren, Fragment } from "preact";
import { BlogPost } from "apps/blog/types.ts";
import { useId } from "../sdk/useId.ts";

export interface CTA {
  text?: string;
}

/** @title {{{title}}} */
export interface Post {
  url?: string;
  title?: string;
  author?: string;
  excerpt?: string;
  image?: ImageWidget;
  date?: string;
  readingTime?: string;
  tags?: string[];
}

export interface Props {
  cta?: CTA;
  posts?: BlogPost[] | null;
  pagination?: {
    /**
     * @title First page
     * @description Leave it as 0 to start from the first page
     */
    page?: number;
    /** @title items per page */
    perPage?: number;
  };
} 

const DEFAULT_IMAGE =
  "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/4763/682eb374-def2-4e85-a45d-b3a7ff8a31a9";

function Container({ children }: { children: ComponentChildren }) {
  return (
    <div class="container lg:mx-auto lg:py-14 mx-2 py-12 text-sm">
      <div class="space-y-8">{children}</div>
    </div>
  );
}

export default function BlogPosts({
  cta = { text: "Show more" },
  posts = [
    {
      slug: "/",
      title: "Title of blogpost #1",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content"
    },
    {
      slug: "/",
      title: "Title of blogpost #2",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content"
    },
    {
      slug: "/",
      title: "Title of blogpost #3",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content"
    },
    {
      slug: "/",
      title: "Title of blogpost #4",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content"
    },
    {
      slug: "/",
      title: "Title of blogpost #5",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content"
    },
    {
      slug: "/",
      title: "Title of blogpost #6",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content"
    },
    {
      slug: "/",
      title: "Title of blogpost #7",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content"
    },
    {
      slug: "/",
      title: "Title of blogpost #8",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content"
    },
    {
      slug: "/",
      title: "Title of blogpost #9",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content"
    },
    {
      slug: "/",
      title: "Title of blogpost #10",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content"
    },
    {
      slug: "/",
      title: "Title of blogpost #11",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content"
    },
    {
      slug: "/",
      title: "Title of blogpost #12",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content"
    },
    {
      slug: "/",
      title: "Title of blogpost #13",
      authors: [{ name: "Name of the author", email: "author@deco.cx" }],
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      image: DEFAULT_IMAGE,
      date: "01 Apr 2024",
      categories: [{ name: "Tag#1", slug: "tag-1" }],
      content: "Blog Post Content"
    },
  ],
  pagination: {
    page = 0,
    perPage = 6,
  } = {},
}: Props) {
  const from = perPage * page;
  const to = perPage * (page + 1);

  // It's boring to generate ids. Let's autogen them
  const postList = useId();

  // Get the HTMX link for this section
  const fetchMoreLink = usePartialSection({
    mode: "append",
    // Renders this section with the next page
    props: {
      pagination: { perPage, page: page + 1 },
    },
  })["f-partial"];

  function calculateReadingTime(words: number): string {
    const wordsPerMinute = 250;
    const estimatedTimeMinutes = words / wordsPerMinute;

    const roundedReadingTime = Math.round(estimatedTimeMinutes);
    return `${roundedReadingTime} min`;
  }

  const ContainerComponent = page === 0 ? Container : Fragment;

  return (
      <div class="container mx-auto py-8">
      <div class="overflow-x-auto whitespace-nowrap">
          <div class="inline-block bg-white p-4 rounded-lg shadow-md mr-4" style="width: 320px;">
              <Image 
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8677/cb6046cb-8023-4cb5-80a5-59095d84e821" 
              alt="Placeholder Image"
              />
              <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          <div class="inline-block bg-white p-4 rounded-lg shadow-md mr-4" style="width: 320px;">
              <Image 
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/8677/cb6046cb-8023-4cb5-80a5-59095d84e821" 
              alt="Placeholder Image"
              />
              <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>


        </div>
    </div>
  );
}
