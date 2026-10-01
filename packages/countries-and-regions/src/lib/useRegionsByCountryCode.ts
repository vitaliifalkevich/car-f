import { useCallback, useState } from "react";
import { Region } from "../types";
import useDynamicImport from "./useDynamicImport";

interface UseRegionsByCountryCode {
  lang?: string;
  countryCode: string | null;
}

const useRegionsByCountryCode = ({
  lang,
  countryCode,
}: UseRegionsByCountryCode) => {
  const [regions, setRegions] = useState<null | Region>(null);

  const loadLocale = useCallback(async () => {
    if (lang && countryCode) {
      try {
        return await import(
          `../../src/locales/${String(lang).toLowerCase()}/regions/${String(
            countryCode
          ).toUpperCase()}.json`
        );
      } catch (err) {
        return null;
      }
    }
    return null;
  }, [lang, countryCode]);

  useDynamicImport(loadLocale, setRegions);

  return regions;
};

export default useRegionsByCountryCode;
