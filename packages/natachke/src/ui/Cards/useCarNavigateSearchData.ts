import { useCallback } from 'react'
import { useLocation, useRouteMatch } from 'react-router-dom'
import { searchRoute } from 'routes'
import { actions } from 'entities/Search/slice'
import { useDispatch } from 'react-redux'

const useCarNavigateSearchData = () => {
  const isSearchPage = !!useRouteMatch(searchRoute)
  const dispatch = useDispatch()
  const location = useLocation()

  return useCallback(() => {
    if (!isSearchPage) return
    dispatch(
      actions.setPrevSearchParams(
        location.pathname + location.hash + location.search,
      ),
    )
  }, [
    dispatch,
    isSearchPage,
    location.hash,
    location.pathname,
    location.search,
  ])
}

export default useCarNavigateSearchData
