export type AxisLabel = 'attract' | 'drive' | 'dominant' | 'deviance' | 'affect'

export type ValueName =
  | 'masculine'
  | 'feminine'
  | 'hypersexual'
  | 'hyposexual'
  | 'dominant'
  | 'submissive'
  | 'deviant'
  | 'pure'
  | 'affective'
  | 'hedonist'

export type QuizAnswerValue = number | null
export type QuizAnswers = Record<string, QuizAnswerValue>
export type Percentages = Record<string, string>

export interface LegacyQuestion {
  id: number
  question: string
  effect: Partial<Record<AxisLabel, number>>
}

export type FeedbackAnswerValue = string | number | null

export interface SmallSelectionAnswer {
  label: string
  color: string
  effect: FeedbackAnswerValue
}

interface FeedbackQuestionBase {
  id: number
  question: string
}

export interface SmallSelectionQuestion extends FeedbackQuestionBase {
  questionType: 'smallSelection'
  answers: SmallSelectionAnswer[]
}

export interface BigSelectionQuestion extends FeedbackQuestionBase {
  questionType: 'bigSelection'
  answers: Record<string, string>
}

export interface CustomNumberQuestion extends FeedbackQuestionBase {
  questionType: 'customNumber'
  range: [number, number]
}

export interface CustomTextQuestion extends FeedbackQuestionBase {
  questionType: 'customText'
}

export type FeedbackQuestion =
  | SmallSelectionQuestion
  | BigSelectionQuestion
  | CustomNumberQuestion
  | CustomTextQuestion

export type FeedbackAnswers = Record<number, FeedbackAnswerValue>

export type Scores = Record<ValueName, number>
