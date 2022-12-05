import clsx from "clsx";
import RouteAnimate from "components/AnimateLayout";
import { useRouter } from "next/router";

const ArticleLayout = ({ children }: { children: React.ReactNode }) => {
  const { back } = useRouter();
  return (
    <RouteAnimate>
      <div role={"link"} onClick={back}>
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
      </div>
      <article className="prose dark:prose-invert prose-sm !max-w-full pb-7">
        {children}
      </article>
    </RouteAnimate>
  );
};

export default ArticleLayout;
