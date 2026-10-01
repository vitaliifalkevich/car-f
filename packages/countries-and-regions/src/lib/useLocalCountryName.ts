import { useCallback, useState } from "react";
import useDynamicImport from "./useDynamicImport";

interface UseLocalCountryName {
  lang?: string;
}

interface GetLocalCountryName {
  countryCode: string | null;
}

const useLocalCountryName = ({
  lang,
}: UseLocalCountryName): ((params: GetLocalCountryName) => string) => {
  const [countries, setCountries] = useState<null | string>(null);
  const loadLocale = useCallback(async () => {
    if (lang) {
      try {
        return await import(
          `../../src/locales/${String(lang).toLowerCase()}/countries/all.json`
        );
      } catch (err) {
        return null;
      }
    }
    return null;
  }, [lang]);
  useDynamicImport(loadLocale, setCountries);

  return useCallback(
    ({ countryCode }: GetLocalCountryName) => {
      return countries?.[String(countryCode)] || countryCode;
    },
    [lang, countries]
  );
};

export default useLocalCountryName;
