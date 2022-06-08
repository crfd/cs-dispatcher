/**
 * On every confined space a company has to perform a hazard assessment to
 * determine the risk of the space.
 */
type Assessment = {
  id: string
  createdAt: Date
  hazards: Hazard[]
}

export default Assessment
