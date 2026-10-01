import { useCallback, useState } from "react";
import { Region } from "../types";
import useDynamicImport from "./useDynamicImport";

interface UseLocalRegion {
  lang?: string;
  countryCode: string | null;
}

interface GetLocalRegion {
  regionCode: string | null;
}

const useLocalRegion = ({
  lang,
  countryCode,
}: UseLocalRegion): ((params: GetLocalRegion) => string | undefined) => {
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

  return useCallback(
    ({ regionCode }: GetLocalRegion) => {
      return regions?.[String(regionCode)] || String(regionCode);
    },
    [lang, regions, countryCode]
  );
};

export default useLocalRegion;
