import clsx from "clsx";
import RouteAnimate from "components/AnimateLayout";
import Link from "next/link";

const ArticleLayout = ({ children }: { children: React.ReactNode }) => {
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
      <article className="prose dark:prose-invert prose-sm !max-w-full pb-7">
        {children}
      </article>
    </RouteAnimate>
  );
};

export default ArticleLayout;
