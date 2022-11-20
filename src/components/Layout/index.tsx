import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useEffect } from "react";
import React from "react";
import { getCookie, setCookie } from "cookies-next";

const Layout: FC<{ dir: string; children: React.ReactNode }> = ({
  dir,
  children,
}) => {
  const themeValue = getCookie("theme") as "dark" | "light" | undefined;

  const { locales, asPath } = useRouter();
  const [theme, setTheme] = React.useState<"dark" | "light">(
    themeValue || "light"
  );

  useEffect(() => {
    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      !themeValue
    ) {
      setTheme("dark");
      setCookie("theme", "dark");
    }
  }, [themeValue]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setCookie("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      setCookie("theme", "light");
    }
  }, [theme]);

  return (
    <div dir={dir} className="container mx-auto">
      <nav className="flex items-center justify-between py-4">
        <h1>Hey!</h1>
        <ul className="flex gap-2 dark:text-white">
          <li>
            <button onClick={() => setTheme("light")}>light</button>
          </li>
          <li>
            <button onClick={() => setTheme("dark")}>dark</button>
          </li>
          {locales?.map((locale) => (
            <li key={locale}>
              <Link locale={locale} href={asPath}>
                {locale}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
