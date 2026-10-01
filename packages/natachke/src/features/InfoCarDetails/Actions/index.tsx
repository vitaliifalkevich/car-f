import React, { useCallback, useState } from 'react'
import { Container, MobileContainer } from './styled'
import {
  useNavigateEditCar,
} from 'hooks'
import HorizontalLine from 'ui/HorizontalLine'
import { useBreakpoint } from 'MediaQueriesProvider'
import ArchiveConfirm from 'features/PopUps/ArchiveConfirm'
import Statistic from 'features/PopUps/Statistic'
import {
  Archive,
  Edit,
  PhoneViewsCount,
  StatisticInfo,
  ViewsCount,
} from 'ui/AdActions'
import { useDispatch } from 'react-redux'
import { actions } from 'entities/MyCars/slice'
import {
  ChangeCarStatusPayloadStatusEnum,
} from '@handber/natachke-api-client'

const Actions: React.FC<{
  carId?: number
  carUrl?: string
  viewCarCount?: number
  viewPhoneCount?: number
}> = ({ carId, carUrl, viewCarCount = 0, viewPhoneCount = 0 }) => {
  const breakpoints = useBreakpoint()
  const dispatch = useDispatch()
  const onClickEditCar = useNavigateEditCar()
  const [isOpenArchiveConfirmation, setOpenArchiveConfirmation] = useState(
    false,
  )


  const [isOpenStatistic, setOpenStatistic] = useState(false)

  const closeArchiveConfirmation = useCallback(() => {
    setOpenArchiveConfirmation(false)
  }, [setOpenArchiveConfirmation])

  const closeStatistic = useCallback(() => {
    setOpenStatistic(false)
  }, [])

  const confirmArchiveHandler = useCallback(() => {
    closeArchiveConfirmation()
    if (!carId) return
    dispatch(
      actions.startChangeCarVisibleStatus({
        carId,
        status: ChangeCarStatusPayloadStatusEnum.Archive,
      }),
    )
  }, [carId, closeArchiveConfirmation, dispatch])

  return (
    <>
      {!breakpoints.mobile && !breakpoints.tablet ? (
        <>
          <Container>
            <div>
              <ViewsCount viewCount={viewCarCount} />
              <PhoneViewsCount phoneCount={viewPhoneCount} />
              {carId && (
                <StatisticInfo
                  setOpenStatistic={setOpenStatistic}
                  carId={carId}
                />
              )}
            </div>
            <div>

              <Edit onClickEditCar={() => onClickEditCar(carUrl)} />

              <Archive
                setOpenArchiveConfirmation={setOpenArchiveConfirmation}
              />
            </div>
          </Container>
        </>
      ) : breakpoints.tablet ? (
        <>
          <MobileContainer>
            {carId && (
              <StatisticInfo
                setOpenStatistic={setOpenStatistic}
                carId={carId}
              />
            )}

            <div />

            <Edit onClickEditCar={() => onClickEditCar(carUrl)} />
            <div>
              <ViewsCount viewCount={viewCarCount} />
              <PhoneViewsCount phoneCount={viewPhoneCount} />
            </div>

            <div />

            <Archive setOpenArchiveConfirmation={setOpenArchiveConfirmation} />
          </MobileContainer>
        </>
      ) : (
        <>
          <MobileContainer>
            <div>
              {carId && (
                <StatisticInfo
                  setOpenStatistic={setOpenStatistic}
                  carId={carId}
                />
              )}

              <ViewsCount viewCount={viewCarCount} />
              <PhoneViewsCount phoneCount={viewPhoneCount} />
            </div>

            <div>

              <Edit onClickEditCar={() => onClickEditCar(carUrl)} />
              <Archive
                setOpenArchiveConfirmation={setOpenArchiveConfirmation}
              />
            </div>
          </MobileContainer>
        </>
      )}
      {isOpenArchiveConfirmation && (
        <ArchiveConfirm
          onConfirmClickHandler={confirmArchiveHandler}
          closeArchiveConfirmation={closeArchiveConfirmation}
        />
      )}
      {isOpenStatistic && <Statistic closeStatistic={closeStatistic} />}

      <HorizontalLine />
    </>
  )
}

export default Actions
