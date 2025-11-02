export interface SectorAllocation {
  sector: string
  allocation: number
  color?: string
}

export const INSIGHTS: SectorAllocation[] = [
  { sector: 'Technology', allocation: 40, color: '#3b82f6' },
  { sector: 'Healthcare', allocation: 20, color: '#10b981' },
  { sector: 'Financials', allocation: 15, color: '#f59e0b' },
  { sector: 'Consumer Discretionary', allocation: 15, color: '#ef4444' },
  { sector: 'Energy', allocation: 10, color: '#8b5cf6' },
]
