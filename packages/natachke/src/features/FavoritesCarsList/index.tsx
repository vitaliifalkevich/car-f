import React, { useCallback, useMemo, useState } from 'react'
import { CarFavoriteList, CarFavoriteListMobile } from 'ui/Cards'
import EmptyResults from 'ui/EmptyResults'
import { checkTrueCarGroup, checkTopCarGroup } from 'utils'
import { useBreakpoint } from '../../MediaQueriesProvider'
import { useTranslation } from 'react-i18next'
import HorizontalLine from 'ui/HorizontalLine'
import Pagination from 'ui/Pagination'
import { Container } from './styled'
import { SHOW_PER_PAGE_DEFAULT } from 'config'
import { useSelector } from 'react-redux'
import { getMyFavoriteCars } from 'entities/Favorites/selectors'

const FavoritesCarsList: React.FC = () => {
  const breakpoints = useBreakpoint()
  const { t } = useTranslation()
  const favoriteCars = useSelector(getMyFavoriteCars)
  const [activePage, setActivePage] = useState(0)

  const handlePageClick = useCallback(e => {
    setActivePage(e.selected)
  }, [])

  const preparedCars = useMemo(() => {
    const start = activePage * SHOW_PER_PAGE_DEFAULT
    const finish = start + SHOW_PER_PAGE_DEFAULT
    return favoriteCars?.slice(start, finish)
  }, [activePage, favoriteCars])

  return (
    <Container>
      {preparedCars.length > 0 ? (
        preparedCars.map((car, idx) => (
          <React.Fragment key={`carSearch${car.id}${idx}`}>
            {breakpoints.mobile ? (
              <>
                <CarFavoriteListMobile
                  {...car}
                  isTrueCar={checkTrueCarGroup(car.groups)}
                  isTopCar={checkTopCarGroup(car.groups)}
                />
                {idx + 1 > preparedCars.length && <HorizontalLine />}
              </>
            ) : (
              <>
                <HorizontalLine />
                <CarFavoriteList
                  {...car}
                  isTrueCar={checkTrueCarGroup(car.groups)}
                  isTopCar={checkTopCarGroup(car.groups)}
                />
              </>
            )}
          </React.Fragment>
        ))
      ) : (
        <EmptyResults text={t('notCarsInFavorites')} />
      )}
      {favoriteCars && preparedCars && preparedCars?.length > 0 ? (
        <>
          <HorizontalLine />
          {favoriteCars.length > SHOW_PER_PAGE_DEFAULT && (
            <Pagination
              initialActivePage={activePage}
              count={Math.ceil(favoriteCars.length / SHOW_PER_PAGE_DEFAULT)}
              handlePageClick={handlePageClick}
            />
          )}
        </>
      ) : null}
    </Container>
  )
}

export default FavoritesCarsList
