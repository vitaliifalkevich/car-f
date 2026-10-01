import React, { useCallback } from 'react'
import { Icon, Item, Text } from '../styled'
import statistic from 'assets/icons/statistic.svg'
import { useTranslation } from 'react-i18next'
import { actions } from 'entities/ViewsCount/slice'
import { useDispatch } from 'react-redux'

const StatisticInfo: React.FC<{
  setOpenStatistic: (boolean) => void
  carId: number
}> = ({ setOpenStatistic, carId }) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const openStatistic = useCallback(() => {
    if (!carId) return
    dispatch(actions.startGettingViewsHistory(carId))
    setOpenStatistic(true)
  }, [carId, dispatch, setOpenStatistic])

  return (
    <Item>
      <Icon src={statistic} alt="statistic" />
      <Text isAction={true} onClick={openStatistic}>
        {t('statistic')}
      </Text>
    </Item>
  )
}

export default StatisticInfo
