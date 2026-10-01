import getMetaTagByName from './getMetaTagByName'
import { Name } from './getMetaTagByName'

const setMetaTagByName = (name: Name, content: string) => {
  const metTagEl = getMetaTagByName(name)

  if (content) {
    const currentContent = metTagEl?.getContent()

    if (currentContent !== content) metTagEl?.setContent(content)
  }
}

export default setMetaTagByName
