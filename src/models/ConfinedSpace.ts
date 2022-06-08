import Assessment from './Assessment'

type ConfinedSpace = {
  id: string
  createdAt: Date
  createdByUserId: string
  description: string
  documents: Document[]
  assessments: Assessment[]
}

export default ConfinedSpace
