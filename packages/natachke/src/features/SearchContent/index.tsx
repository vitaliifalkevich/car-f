import React, { useEffect } from 'react'
import { useFormState } from 'react-final-form'
import { useSearchCars } from '../../hooks'

const SearchContent: React.FC = ({ children }) => {
  const formState = useFormState()
  const searchCars = useSearchCars()

  useEffect(() => {
    if (formState?.values) searchCars(formState.values)
    //eslint-disable-next-line
  }, [])

  return <>{children}</>
}

export default SearchContent
