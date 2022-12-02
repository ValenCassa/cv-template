import clsx from "clsx";
import ThemeButton from "components/ThemeButton";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={clsx(
        "pt-6",
        "w-full",
        "max-w-3xl",
        "mx-auto",
        "px-4",
        "sm:px-5",
        "border-x",
        "border-neutral-200",
        "dark:border-neutral-800",
        "min-h-screen"
      )}
    >
      <ThemeButton />
      {children}
    </div>
  );
};

export default Layout;
