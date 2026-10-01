import React from 'react'
import ReactPaginate from 'react-paginate'
import ComponentThemeProvider from 'styles/theme/ComponentThemeProvider'
import themes from './themes'
import { Container, LeftArrow, RightArrow } from './styled'
import { useBreakpoint } from '../../MediaQueriesProvider'

interface PaginationProps {
  initialActivePage?: number
  count: number
  handlePageClick: (e: { selected: number }) => void
  forcePage?: number
}

const Pagination: React.FC<PaginationProps> = ({
  initialActivePage,
  count,
  handlePageClick,
  forcePage,
}) => {
  const breakpoints = useBreakpoint()
  return (
    <ComponentThemeProvider themes={themes}>
      <Container>
        <ReactPaginate
          breakLabel="..."
          initialPage={initialActivePage}
          nextLabel={<RightArrow />}
          onClick={handlePageClick}
          pageRangeDisplayed={
            breakpoints.mobile ? 1 : breakpoints.tablet ? 3 : 5
          }
          forcePage={forcePage}
          pageCount={count}
          previousLabel={<LeftArrow />}
          marginPagesDisplayed={1}
        />
      </Container>
    </ComponentThemeProvider>
  )
}

export default React.memo(Pagination)
