import React, { MouseEventHandler } from 'react'
import { components, MultiValueProps } from 'react-select'
import { IOption } from 'hooks'

const MultiValue = (props: MultiValueProps<IOption>) => {
  const onMouseDown: MouseEventHandler<HTMLDivElement> = e => {
    e.preventDefault()
    e.stopPropagation()
  }
  const innerProps = { ...props.innerProps, onMouseDown }
  return <components.MultiValue {...props} innerProps={innerProps} />
}

export default MultiValue
