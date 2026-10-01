export type Property =
  | 'og:title'
  | 'og:description'
  | 'twitter:title'
  | 'twitter:description'
  | 'og:url'
  | 'twitter:url'
  | 'twitter:image'
  | 'og:image'

const getMetaTagByProperty = (property: Property) => {
  const meta = document.querySelector(`meta[property="${property}"]`)
  if (meta)
    return {
      getContent: () => meta.getAttribute('content'),
      setContent: (description: string) =>
        meta.setAttribute('content', description),
    }
}

export default getMetaTagByProperty
