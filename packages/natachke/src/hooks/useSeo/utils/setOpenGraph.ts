import { env } from 'config'
const setOpenGraph = (pathname: string) => {
  const metaOpenGraph = document.querySelector('meta[property="og:url"]')
  const metaTwitter = document.querySelector('meta[property="twitter:url"]')

  const openGraphUrl = metaOpenGraph?.getAttribute('content')
  const twitterUrl = metaTwitter?.getAttribute('content')
  const currentPageUrl = 'https://' + env.domain + pathname

  if (pathname && openGraphUrl) {
    if (openGraphUrl !== currentPageUrl)
      metaOpenGraph?.setAttribute('content', currentPageUrl)
  }

  if (pathname && twitterUrl) {
    if (twitterUrl !== currentPageUrl)
      metaTwitter?.setAttribute('content', currentPageUrl)
  }
}

export default setOpenGraph
