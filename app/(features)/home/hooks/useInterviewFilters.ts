import { useState } from 'react'

export function useInterviewFilters() {
  const [companyFilter, setCompanyFilter] = useState('')
  const [roundTypeFilter, setRoundTypeFilter] = useState('')
  const [durationFilter, setDurationFilter] = useState('')

  const resetFilters = () => {
    setCompanyFilter('')
    setRoundTypeFilter('')
    setDurationFilter('')
  }

  return {
    companyFilter,
    roundTypeFilter,
    durationFilter,
    setCompanyFilter,
    setRoundTypeFilter,
    setDurationFilter,
    resetFilters
  }
}