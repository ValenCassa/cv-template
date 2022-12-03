import clsx from "clsx";
import { Experience } from "types";
import { formatDate } from "utils/formatDate";

const ExperienceTable = ({ data }: { data: Experience[] }) => {
  const sortedExperiences = data.sort((a, b) => {
    const isPresent = (date: string | undefined) => !date;
    const aDate = isPresent(a.dateTo)
      ? new Date()
      : new Date(a.dateTo as string);
    const bDate = isPresent(b.dateTo)
      ? new Date()
      : new Date(b.dateTo as string);
    return bDate.getTime() - aDate.getTime();
  });

  return (
    <div className={clsx("gap-8", "grid")}>
      {sortedExperiences.map((item: Experience) => (
        <div
          key={item.company}
          className={clsx("relative", "grid", "w-full", "sm:!flex")}
        >
          <div
            className={clsx(
              "min-w-[180px]",
              "text-sm",
              "text-neutral-400",
              "dark:text-neutral-500",
              "mb-1 sm:mb-0",
              "flex",
              "flex-row",
              "sm:flex-col",
              "gap-1",
              "sm:gap-0"
            )}
          >
            <p>{formatDate(item.dateFrom)} - </p>

            <p>{item.dateTo ? formatDate(item.dateTo) : "Present"}</p>
          </div>

          <div className={clsx("grid", "gap-1", "relative")}>
            <div className="flex gap-2 ">
              <h2
                className={clsx("text-smPlus", "font-medium", "inline-block")}
              >
                {item.title}
              </h2>
              <span
                className={clsx(
                  "text-sm",
                  "text-neutral-400",
                  "dark:text-neutral-500"
                )}
              >
                @{item.company}
              </span>
            </div>
            <p
              className={clsx(
                "text-sm",
                "text-neutral-500",
                "dark:text-neutral-400"
              )}
            >
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTable;
