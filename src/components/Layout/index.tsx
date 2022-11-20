import Link from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
import React from "react";

const Layout: FC<{ dir: string; children: React.ReactNode }> = ({
  dir,
  children,
}) => {
  const { locales, asPath } = useRouter();
  return (
    <div dir={dir}>
      <nav className="flex items-center justify-between px-4">
        <h1>Hey!</h1>
        <ul className="flex gap-2">
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
