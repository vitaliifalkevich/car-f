import { useCallback } from 'react'

export const useScrollIntoView = ({ ref }) => {
  return useCallback(() => {
    if (ref.current) ref.current.scrollIntoView({ behavior: 'smooth' })
  }, [ref])
}
