export const filterInterviews = (interviews: any[], filters: any) => {
  return interviews.filter(company => {
    const matchesCompany = !filters.companyFilter || 
      company.companyName.toLowerCase() === filters.companyFilter;
    
    const matchesRoundType = !filters.roundTypeFilter || (
      (filters.roundTypeFilter === 'coding' && company.roundType === 'Coding Round') ||
      (filters.roundTypeFilter === 'technical_mcq' && company.roundType === 'Technical MCQ') ||
      (filters.roundTypeFilter === 'system_design' && company.roundType === 'System Design') ||
      (filters.roundTypeFilter === 'behavioral_hr' && company.roundType === 'HR Round') ||
      (filters.roundTypeFilter === 'phone_screen' && company.roundType === 'Phone Screen') ||
      (filters.roundTypeFilter === 'aptitude' && company.roundType === 'Aptitude Round')
    );
    
    const durationNum = parseInt(company.duration.match(/\d+/)?.[0] || '0');
    const isHours = company.duration.includes('hour');
    const totalMinutes = isHours ? durationNum * 60 : durationNum;
    
    const matchesDuration = !filters.durationFilter || (
      (filters.durationFilter === 'less30' && totalMinutes <= 30) ||
      (filters.durationFilter === '30to60' && totalMinutes > 30 && totalMinutes <= 90) ||
      (filters.durationFilter === 'more60' && totalMinutes > 90)
    );
    
    return matchesCompany && matchesRoundType && matchesDuration;
  });
}

export const checkUnavailableRounds = (roundType: string) => {
  const unavailableRounds = [
    "HR Round", 
    "Phone Screen", 
    "Aptitude Round",
    "System Design"
  ];
  
  return unavailableRounds.includes(roundType);
}