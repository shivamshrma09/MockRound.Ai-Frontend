export interface Interview {
  id: string
  companyName: string
  logoSrc: string
  roundType: string
  questions: number
  duration: string
  successRate: string
  attempts: number
  description: string
  reviews: number
  questionsList: any[]
}

export interface FilterOptions {
  companyFilter?: string
  roundTypeFilter?: string
  durationFilter?: string
}

export interface OptionData {
  id: string
  label: string
  value?: string
}

export interface InterviewData {
  companyOptions: OptionData[]
  roundTypeOptions: OptionData[]
  durationOptions: OptionData[]
}