import React, { useCallback, useMemo, useState } from 'react'
import {
  ListContainer,
  ActiveCarsIcon,
  WaitingCarsIcon,
  ArchivedCarsIcon,
} from './styled'
import { ButtonsGroup } from 'ui/Inputs'
import { useTranslation } from 'react-i18next'
import { CarCardList, CarCardListMobile } from 'ui/Cards'
import HorizontalLine from 'ui/HorizontalLine'
import Pagination from 'ui/Pagination'
import { useBreakpoint } from 'MediaQueriesProvider'
import EmptyResults from 'ui/EmptyResults'
import { useHistory } from 'react-router-dom'
import { useGenerateUrlWithLang } from '../../hooks'
import roundPlusGrey from 'assets/icons/roundPlusGrey.svg'
import { useSelector } from 'react-redux'
import { getMyCars } from 'entities/MyCars/selectors'
import { MY_CAR_CATEGORY } from 'entities/MyCars/types'
import { SHOW_PER_PAGE_DEFAULT } from 'config'
import { checkTrueCarGroup, checkTopCarGroup } from 'utils'

const MyCarsList: React.FC = () => {
  const { t } = useTranslation()
  const history = useHistory()
  const myCars = useSelector(getMyCars)
  const [activePage, setActivePage] = useState(0)

  const generateUrlWithLang = useGenerateUrlWithLang()

  const tabs = useMemo(
    () => [
      {
        label: t('mayAds.active'),
        value: MY_CAR_CATEGORY.ACTIVE,
        icon: ActiveCarsIcon,
      },
      {
        label: t('mayAds.waiting'),
        value: MY_CAR_CATEGORY.WAITING,
        icon: WaitingCarsIcon,
      },
      {
        label: t('mayAds.archived'),
        value: MY_CAR_CATEGORY.ARCHIVE,
        icon: ArchivedCarsIcon,
      },
    ],
    [t],
  )

  const [activeTab, setActiveTab] = useState(tabs[0].value)
  const breakpoints = useBreakpoint()

  const onButtonClick = useCallback(
    value => {
      setActiveTab(value)
    },
    [setActiveTab],
  )

  const handlePageClick = useCallback(e => {
    setActivePage(e.selected)
  }, [])

  const preparedCars = useMemo(() => {
    const start = activePage * SHOW_PER_PAGE_DEFAULT
    const finish = start + SHOW_PER_PAGE_DEFAULT
    return myCars?.[activeTab]?.slice(start, finish)
  }, [activePage, activeTab, myCars])

  const sellCarClick = useCallback(() => {
    history.push(generateUrlWithLang(`/sell`))
  }, [generateUrlWithLang, history])

  const rejectReason = useCallback(
    (status, message) => (status === 'rejected' ? message : null),
    [],
  )

  return (
    <div>
      <ButtonsGroup
        options={tabs}
        onClick={onButtonClick}
        value={activeTab}
        fontSize="14px"
      />
      <ListContainer>
        {preparedCars && preparedCars?.length > 0 ? (
          preparedCars?.map((car, idx) => (
            <React.Fragment key={`${car.id}${idx}`}>
              {breakpoints.mobile ? (
                <>
                  <CarCardListMobile
                    key={`carSearch${car.id}${idx}`}
                    {...car}
                    isTrueCar={checkTrueCarGroup(car.groups)}
                    isTopCar={checkTopCarGroup(car.groups)}
                    withActions={true}
                    hideFavorite={true}
                    viewCount={car.view_car_count}
                    phoneCount={car.view_phone_count}
                    rejectReason={rejectReason(
                      car.car_status?.value,
                      car?.rejected_message,
                    )}
                    isNotActive={
                      !(
                        car?.car_status?.value === 'approved' &&
                        car.visible_status?.value === 'public'
                      )
                    }
                  />
                  {idx + 1 < preparedCars.length ? <HorizontalLine /> : null}
                </>
              ) : (
                <CarCardList
                  key={`carSearch${car.id}${idx}`}
                  {...car}
                  hideFavorite={true}
                  isTrueCar={checkTrueCarGroup(car.groups)}
                  isTopCar={checkTopCarGroup(car.groups)}
                  withActions={true}
                  viewCount={car.view_car_count}
                  phoneCount={car.view_phone_count}
                  rejectReason={rejectReason(
                    car.car_status?.value,
                    car?.rejected_message,
                  )}
                  isNotActive={
                    !(
                      car?.car_status?.value === 'approved' &&
                      car.visible_status?.value === 'public'
                    )
                  }
                />
              )}
            </React.Fragment>
          ))
        ) : (
          <EmptyResults
            action={
              activeTab === MY_CAR_CATEGORY.ACTIVE ? sellCarClick : undefined
            }
            actionText={t('sellCar')}
            text={
              activeTab === MY_CAR_CATEGORY.ACTIVE
                ? t('notCarsOnTheSale')
                : t('empty')
            }
            actionIcon={
              activeTab === MY_CAR_CATEGORY.ACTIVE ? roundPlusGrey : undefined
            }
          />
        )}
      </ListContainer>

      {myCars?.[activeTab] && preparedCars && preparedCars?.length > 0 ? (
        <>
          <HorizontalLine />
          {myCars?.[activeTab].length > SHOW_PER_PAGE_DEFAULT && (
            <Pagination
              initialActivePage={activePage}
              count={Math.ceil(
                myCars[activeTab].length / SHOW_PER_PAGE_DEFAULT,
              )}
              handlePageClick={handlePageClick}
            />
          )}
        </>
      ) : null}
    </div>
  )
}

export default MyCarsList
