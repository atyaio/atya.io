import { type AppType } from "next/dist/shared/lib/utils";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IntlProvider } from "react-intl";

import ar from "../lang/ar.json";
import en from "../lang/en.json";
import "../styles/globals.css";

type SupportedLanguages = "ar" | "en";

const messages = {
  ar,
  en,
};

function getDirection(locale: SupportedLanguages) {
  if (locale === "ar") {
    return "rtl";
  }

  return "ltr";
}

const MyApp: AppType = ({ Component, pageProps }) => {
  const { locale = "en" } = useRouter() as { locale: SupportedLanguages };

  useEffect(() => {
    const direction = getDirection(locale);
    document.documentElement.dir = direction;
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
};

export default MyApp;
