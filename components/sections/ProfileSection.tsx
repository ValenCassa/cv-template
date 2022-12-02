import clsx from "clsx";
import pageConfig from "pageConfig.json";

const ProfileSection = () => {
  const { profile } = pageConfig;
  return (
    <section>
      <h1 className={clsx("text-md", "font-medium")}>{profile.name}</h1>
      <p
        className={clsx(
          "text-sm",
          "text-neutral-500",
          "dark:text-neutral-400",
          "mt-1"
        )}
      >
        {profile.description}
      </p>
    </section>
  );
};

export default ProfileSection;
