const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL 

export interface CodeSubmission {
  question: string;
  user_code: string;
  correct_solution?: string;
  language: string;
  difficulty: string;
}

export interface AnalysisResult {
  submission_id: number;
  question_title: string;
  overall_score: number;
  analysis: {
    correctness: { score: number };
    code_quality: { score: number };
    efficiency: { score: number; time_complexity?: string };
    ai_detection: { penalty: number };
    similarity: { penalty: number };
  };
  feedback: string;
  recommendations: string[];
}

export interface BatchAnalysisResponse {
  success: boolean;
  message: string;
  status?: string;
  data?: {
    status: string;
    total_submissions: number;
    average_score: number;
    results: AnalysisResult[];
  };
}

export const submitCodeForAnalysis = async (
  submissions: CodeSubmission[],
  userId: string
): Promise<BatchAnalysisResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/batch-analysis`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        submissions,
        userId,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Analysis submission failed');
    }
    
    return {
      success: true,
      message: "Submitted successfully",
      data
    };
  } catch (error) {
    console.error('Code analysis error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Analysis submission failed'
    };
  }
};