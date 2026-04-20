import type { AxisLabel, ValueName } from '../types'

// Axis Labels

export const labels: AxisLabel[] = [
  'attract',
  'drive',
  'dominant',
  'deviance',
  'affect',
]

export const axisNames: Record<AxisLabel, string> = {
  attract: 'Attraction',
  drive: 'Sex Drive',
  dominant: 'Dominance Axis',
  deviance: 'Deviance Axis',
  affect: 'Affection Axis',
}

export const axisArrays: Record<AxisLabel, string[]> = {
  attract: [
    'Feminine',
    'Feminine-leaning',
    'Neutral',
    'Masculine-leaning',
    'Masculine',
  ],
  drive: ['Hyposexual', 'Low', 'Medium', 'High', 'Hypersexual'],
  dominant: ['Submissive', 'Switch', 'Dominant'],
  deviance: ['Puritarian', 'Vanilla', 'Balanced', 'Kinky', 'Deviant'],
  affect: ['Hedonist', 'Open', 'Neutral', 'Affective', 'Exclusive'],
}

// Values

export const values: { left: ValueName[]; right: ValueName[] } = {
  left: ['masculine', 'hypersexual', 'dominant', 'deviant', 'affective'],
  right: ['feminine', 'hyposexual', 'submissive', 'pure', 'hedonist'],
}

export const valueColors: Record<ValueName, string> = {
  masculine: '#0099E5',
  feminine: '#E50099',
  hyposexual: '#00CCCC',
  hypersexual: '#CC0000',
  dominant: '#CC7400',
  submissive: '#009957',
  deviant: '#8300E5',
  pure: '#EEEEEE',
  affective: '#B20000',
  hedonist: '#00B2B2',
}
