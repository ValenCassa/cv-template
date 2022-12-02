import clsx from "clsx";
import SectionTitle from "components/SectionTitle";
import { Skills } from "types";
import pageConfig from "pageConfig.json";

const constructSkills = (data: Skills) => {
  const skills = Object.entries(data);

  return (
    <>
      {skills.map(([key, value]) => (
        <div key={key} className={clsx("flex", "gap-3")}>
          <div className={clsx("text-sm", "py-[3px]", "min-w-[100px]")}>
            <p>{key}</p>
          </div>
          <div className={clsx("flex", "gap-2", "flex-wrap")}>
            {value.map((skill) => (
              <div
                key={skill}
                className={clsx(
                  "text-center",
                  "bg-neutral-200",
                  "dark:bg-neutral-800",
                  "rounded-[3px]",
                  "text-sm",
                  "px-3",
                  "py-[3px]"
                )}
              >
                <p className={clsx("text-sm")}>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

const SkillsSection = () => {
  const { skills } = pageConfig;
  return (
    <section>
      <SectionTitle>Skills</SectionTitle>
      <div className={clsx("grid", "gap-2")}>{constructSkills(skills)}</div>
    </section>
  );
};

export default SkillsSection;
