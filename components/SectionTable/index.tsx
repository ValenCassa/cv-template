import clsx from "clsx";
import Link from "next/link";
import { Data } from "types";
import { formatDate } from "utils/formatDate";
import { motion } from "framer-motion";

const SectionTable = ({
  data,
  type,
}: {
  data: Data[];
  type: "post" | "project";
}) => {
  return (
    <div>
      <div className={clsx("gap-8", "grid")}>
        {data.map((item: Data) => (
          <div
            key={item.slug}
            className={clsx("relative", "grid", "w-full", "sm:!flex")}
          >
            <div
              className={clsx(
                "min-w-[180px]",
                "text-sm",
                "text-neutral-400",
                "dark:text-neutral-500",
                "mb-3 sm:mb-0"
              )}
            >
              <p>{formatDate(item.data.date)}</p>
            </div>
            <Link href={`/${type}s/${item.slug}`}>
              <div
                className={clsx(
                  "grid",
                  "gap-1",
                  "relative",
                  "before:contents-none",
                  "before:w-full",
                  "before:h-full",
                  "before:absolute",
                  "before:top-0",
                  "before:left-0",
                  "before:scale-y-110",
                  "before:scale-x-105",
                  "before:rounded-md",
                  "before:bg-transparent",
                  "before:hover:bg-neutral-100",
                  "before:hover:dark:bg-neutral-800",
                  "before:-z-10",
                  "before:transition-colors",
                  "before:duration-200"
                )}
              >
                <h2 className={clsx("text-smPlus", "font-medium")}>
                  {item.data.title}
                </h2>
                <p
                  className={clsx(
                    "text-sm",
                    "text-neutral-500",
                    "dark:text-neutral-400"
                  )}
                >
                  {item.data.description}
                </p>
                {item.data.imageURL && (
                  <div
                    className={clsx(
                      "w-full",
                      "h-[140px]",
                      "bg-cover",
                      "bg-center",
                      "bg-no-repeat",
                      "rounded-sm",
                      "mt-3"
                    )}
                    style={{ backgroundImage: `url(${item.data.imageURL})` }}
                  />
                )}
              </div>
            </Link>
          </div>
        ))}
        <motion.div whileTap={{ scale: 0.9 }}>
          <Link href={`/${type}s`}>
            <button
              className={clsx(
                "w-full",
                "text-sm",
                "font-medium",
                "p-1",
                "bg-neutral-100",
                "dark:bg-neutral-800",
                "rounded-md",
                "hover:bg-neutral-200",
                "dark:hover:bg-neutral-700",
                "transition-colors",
                "duration-200"
              )}
            >
              See more
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionTable;
