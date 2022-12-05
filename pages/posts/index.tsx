import clsx from "clsx";
import RouteAnimate from "components/AnimateLayout";
import PostCard from "components/PostCard";
import { GetStaticProps } from "next";
import Link from "next/link";
import { getPosts } from "services";
import { Data } from "types";

const PostView = ({ posts }: { posts: Data[] }) => {
  return (
    <RouteAnimate>
      <Link href={"/"}>
        <p
          className={clsx(
            "text-md",
            "text-neutral-400",
            "dark:text-neutral-500",
            "cursor-pointer",
            "hover:text-neutral-500",
            "dark:hover:text-neutral-400",
            "transition-colors",
            "duration-200",
            "mb-4",
            "italic"
          )}
        >
          ← Back
        </p>
      </Link>
      <div className={clsx("grid", "gap-3")}>
        {posts.map((post) => (
          <PostCard item={post} key={post.slug} type={"post"} />
        ))}
      </div>
    </RouteAnimate>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const posts = await getPosts({});

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default PostView;
