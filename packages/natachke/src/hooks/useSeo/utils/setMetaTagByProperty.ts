import getMetaTagByProperty, { Property } from './getMetaTagByProperty'

const setMetaTagByProperty = (property: Property, content: string) => {
  const metTagEl = getMetaTagByProperty(property)

  if (content) {
    const currentContent = metTagEl?.getContent()

    if (currentContent !== content) metTagEl?.setContent(content)
  }
}

export default setMetaTagByProperty
