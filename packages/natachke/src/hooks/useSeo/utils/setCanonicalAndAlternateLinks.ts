import { languages, lang_regions } from 'config'

type GenerateLink = {
  lang?: string
  purePath: string
  type: 'alternate' | 'canonical'
  existedLink: Element | null
}

const generateHref = (purePath: string, lang?: string) =>
  `${window.origin}/${lang ? (lang && purePath ? lang + '/' : lang) : ''}${
    purePath || ''
  }${window.location.search || ''}${window.location.hash || ''}`

const generateLink = ({
  lang = '',
  purePath,
  type,
  existedLink,
}: GenerateLink) => {
  const link = existedLink || document.createElement('link')

  link.setAttribute('href', generateHref(purePath, lang))
  if (existedLink) return link
  link.setAttribute('rel', type)
  if (type === 'alternate' && lang) link.setAttribute('hreflang', lang)
  link.setAttribute('data-alternate', lang || 'default')
  return link
}

const setCanonicalAndAlternateLinks = () => {
  const pathnameWithoutLangInPath = window.location.pathname.replace(
    /(^\/[a-zA-Z]{2}\/)|(^\/[a-zA-Z]{2})/,
    '',
  )

  let existedCanonicalLink = document.querySelector(
    `link[data-alternate="default"]`,
  )

  const link = generateLink({
    purePath: pathnameWithoutLangInPath,
    type: 'canonical',
    existedLink: existedCanonicalLink,
  })
  if (!existedCanonicalLink) document.head.appendChild(link)

  Object.keys(languages).forEach(key => {
    let existedAlternateLink = document.querySelector(
      `link[data-alternate="${lang_regions[key] || key}"]`,
    )
    const link = generateLink({
      lang: lang_regions[key] || key,
      purePath: pathnameWithoutLangInPath,
      type: 'alternate',
      existedLink: existedAlternateLink,
    })
    if (!existedAlternateLink) document.head.appendChild(link)
  })
}

export default setCanonicalAndAlternateLinks
