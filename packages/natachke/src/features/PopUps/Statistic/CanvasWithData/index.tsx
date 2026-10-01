import React, { useEffect, useMemo, useRef } from 'react'
import Chart from 'chart.js/auto'
import { Canvas } from '../styled'
import { Text } from 'ui/Text'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import {
  getIsEmptyViewsHistory,
  getViewsHistoryData,
} from 'entities/ViewsCount/selectors'
import { format } from 'date-fns'
import { CarViewsHistoryTypeViewEnum } from '@handber/natachke-api-client'

const CanvasWithData: React.FC = () => {
  const { t } = useTranslation()
  const canvasRef = useRef(null)
  const viewsStatHistory = useSelector(getViewsHistoryData)
  const isEmptyViewsHistory = useSelector(getIsEmptyViewsHistory)

  const labels = useMemo(() => {
    if (!viewsStatHistory?.[CarViewsHistoryTypeViewEnum.Car]) return []
    return viewsStatHistory[CarViewsHistoryTypeViewEnum.Car].map(item =>
      format(Number(item.date), 'dd.MM'),
    )
  }, [viewsStatHistory])

  useEffect(() => {
    if (!canvasRef?.current) return
    const canvasContainer = canvasRef.current

    //@ts-ignore
    let ctx = canvasContainer.getContext('2d')

    new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: t('phoneViewsCount'),
            // @ts-ignore
            data: viewsStatHistory[CarViewsHistoryTypeViewEnum.Phone]?.map(
              item => item.count,
            ),
            fill: false,
            backgroundColor: '#24B80B',
            borderColor: '#24B80B',
            tension: 0.4,
          },
          {
            label: t('adViewsCount'),
            // @ts-ignore
            data: viewsStatHistory[CarViewsHistoryTypeViewEnum.Car]?.map(
              item => item.count,
            ),
            fill: false,
            backgroundColor: '#003760',
            borderColor: '#003760',
            tension: 0.4,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: 'rgba(0,0,0,0.65)',
            },
          },
          tooltip: {
            backgroundColor: '#EEEDED',
            titleColor: 'rgba(0,0,0,0.65)',
            bodyColor: 'rgba(0,0,0,0.65)',
          },
        },
        scales: {
          x: {
            ticks: {
              color: 'rgba(0,0,0,0.65)',
            },
            grid: {
              color: '#EEEDED',
            },
          },
          y: {
            ticks: {
              color: 'rgba(0,0,0,0.65)',
            },
            grid: {
              color: '#EEEDED',
            },
          },
        },
      },
    })
  }, [labels, t, viewsStatHistory])
  if (isEmptyViewsHistory) return <Text>{t('empty_statistic_history')}</Text>
  return <Canvas ref={canvasRef} />
}

export default CanvasWithData
