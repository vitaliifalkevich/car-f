interface GetCountries {
  lang?: string;
}

type Countries = {
  [COUNTRY_CODE: string]: string;
};

const getCountries = async ({
  lang,
}: GetCountries): Promise<Countries | null> => {
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
};

export default getCountries;
