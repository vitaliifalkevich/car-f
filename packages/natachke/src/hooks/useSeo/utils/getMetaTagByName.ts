export type Name =
  | 'description'
  | 'keywords'
  | 'application-name'
  | 'apple-mobile-web-app-title'

const getMetaTagByName = (name: Name) => {
  const meta = document.querySelector(`meta[name="${name}"]`)
  if (meta)
    return {
      getContent: () => meta.getAttribute('content'),
      setContent: (description: string) =>
        meta.setAttribute('content', description),
    }
}

export default getMetaTagByName
