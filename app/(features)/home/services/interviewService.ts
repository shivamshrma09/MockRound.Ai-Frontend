import interviewDatabase from '../../../shared/data/interviewDatabase'

export const interviewService = {
  getAllInterviews: () => {
    return interviewDatabase
  },

  getInterviewByCompany: (companyName: string) => {
    return interviewDatabase.find(
      interview => interview.companyName.toLowerCase() === companyName.toLowerCase()
    )
  },

  getInterviewsByRoundType: (roundType: string) => {
    return interviewDatabase.filter(
      interview => interview.roundType === roundType
    )
  },

  findInterviewByQuestions: (questionsList: any) => {
    return interviewDatabase.find(
      interview => interview.questionsList === questionsList
    )
  }
}