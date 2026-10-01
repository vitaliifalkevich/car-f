import { useHistory } from 'react-router-dom'
import i18next from 'i18next'
import { useCallback } from 'react'

const useNavigateWithLang = () => {
  const history = useHistory()

  return useCallback(
    lng => {
      const { pathname, search, hash, state } = history.location
      const newPath = pathname.replace(`/${i18next.language}`, '')

      history.push('/' + lng + newPath + hash + search, state)
    },
    [history],
  )
}

export default useNavigateWithLang
