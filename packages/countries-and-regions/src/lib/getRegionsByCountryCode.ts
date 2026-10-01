interface GetRegionsByCountryCode {
  lang?: string;
  countryCode: string | null;
}

type Regions = {
  [REGION_CODE: string]: string;
};

const getRegionsByCountryCode = async ({
  lang,
  countryCode,
}: GetRegionsByCountryCode): Promise<Regions | null> => {
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
};

export default getRegionsByCountryCode;
