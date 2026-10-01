import React from 'react'
import { useBreakpoint } from '../MediaQueriesProvider'
const MainFilters = React.lazy(() => import('features/MainFilters'))
const LastAdded = React.lazy(() => import('features/LastAdded'))
const TopViewedCars = React.lazy(() => import('features/TopViewedCars'))
const TrueCar = React.lazy(() => import('features/TrueCar'))

const Home: React.FC = () => {
  const breakpoints = useBreakpoint()

  // if (
  //   latestCarsLoading ||
  //   mostViewedCarsLoading ||
  //   trueCarsLoading ||
  //   topCarsLoading
  // )
  //   return <MainLoader />

  return (
    <main>
      <div>
        <MainFilters />
        <TrueCar />
        {/*<PriceLowerMarket />*/}
        <LastAdded />
        <TopViewedCars />
      </div>
    </main>
  )
}

export default Home
