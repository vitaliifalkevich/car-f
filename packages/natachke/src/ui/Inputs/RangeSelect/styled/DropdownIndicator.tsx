import React from 'react'
import dropdownSelect from 'assets/icons/dropdownSelect.svg'
import { components } from 'react-select'
const DropdownIndicator = props => {
  return (
    <components.DropdownIndicator {...props}>
      <img src={dropdownSelect} alt="select" />
    </components.DropdownIndicator>
  )
}

export default DropdownIndicator
