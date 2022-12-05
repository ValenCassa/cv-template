import clsx from "clsx";
import Link from "next/link";
import { Data } from "types";
import { formatDate } from "utils/formatDate";

const PostCard = ({ item, type }: { item: Data; type: "post" | "project" }) => {
  return (
    <Link href={`/${type}s/${item.slug}`}>
      <div
        className={clsx(
          "relative",
          "before:contents-none",
          "before:w-full",
          "before:h-full",
          "before:absolute",
          "before:top-0",
          "before:left-0",
          "before:scale-y-110",
          "before:scale-x-[104%]",
          "before:rounded-md",
          "before:bg-transparent",
          "before:hover:bg-neutral-100",
          "before:hover:dark:bg-neutral-800",
          "before:-z-10",
          "before:transition-colors",
          "before:duration-200"
        )}
      >
        <div
          className={clsx(
            "relative",
            "flex",
            "justify-between",
            "sm:items-center",
            "w-full",
            "flex-wrap",
            "flex-inverse",
            "flex-col-reverse",
            "sm:flex-row"
          )}
        >
          <h3 className={clsx("text-md", "font-medium")}>{item.data.title}</h3>
          <p
            className={clsx(
              "text-sm",
              "text-neutral-400",
              "dark:text-neutral-500"
            )}
          >
            {formatDate(item.data.date)}
          </p>
        </div>
        <p
          className={clsx(
            "text-sm",
            "text-neutral-400",
            "dark:text-neutral-500"
          )}
        >
          {item.data.description}
        </p>
        {item.data.imageURL && (
          <div
            className="w-full h-[140px] rounded-sm bg-no-repeat bg-cover bg-center mt-2"
            style={{ backgroundImage: `url(${item.data.imageURL})` }}
          />
        )}
      </div>
    </Link>
  );
};

export default PostCard;
