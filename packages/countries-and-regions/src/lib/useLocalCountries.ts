import { useCallback, useState } from "react";
import { Country } from "../types";
import useDynamicImport from "./useDynamicImport";

interface UseLocalCountries {
  lang?: string;
}

const useLocalCountries = ({ lang }: UseLocalCountries) => {
  const [countries, setCountries] = useState<null | Country>(null);

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

  return countries;
};

export default useLocalCountries;
