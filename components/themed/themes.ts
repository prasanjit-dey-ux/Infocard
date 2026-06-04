export type CardTheme = {
  pageBg: string;
  card: string;
  cardGradEnd: string;
  cardOutline: string;
  cardBack: string;
  textPrimary: string;
  textSecondary: string;
  starFill: string;
  dashColor: string;
  selectionBg: string;
}

export const themes: Record<string, CardTheme> = {
  skyblue: {
    pageBg: '#E8F4FD',
    card: '#8ECFF0',
    cardGradEnd: '#55B8E8',
    cardOutline: '#6bceff',
    cardBack: '#5CADD4',
    textPrimary: '#0C2D48',
    textSecondary: '#4A708A',
    starFill: '#5CB8E4',
    dashColor: 'rgba(180,225,250,0.8)',
    selectionBg: '#0C4A6E',
  },
  red: {
    pageBg: '#FDECEC',
    card: '#F0A0A0',
    cardGradEnd: '#E06060',
    cardOutline: '#F0A8A8',
    cardBack: '#D47878',
    textPrimary: '#3D0C0C',
    textSecondary: '#7A3030',
    starFill: '#E07070',
    dashColor: 'rgba(248,200,200,0.8)',
    selectionBg: '#7F1D1D',
  },
  green: {
    pageBg: '#ECFDF0',
    card: '#88D8A8',
    cardGradEnd: '#48B870',
    cardOutline: '#90E0B0',
    cardBack: '#58B480',
    textPrimary: '#0A2E18',
    textSecondary: '#2D5840',
    starFill: '#50C078',
    dashColor: 'rgba(180,240,200,0.8)',
    selectionBg: '#14532D',
  },
}
