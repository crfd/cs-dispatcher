type Equipments = {
  /** The safety equipment used by the entrants of the confined space. */
  entrant: string[]

  /**
   * Lists additional rescue equipment that is different from the safety
   * equipment used by the entrant. In case the array is empty it is assumed
   * that rescuers are using the same equipment as the entrant.
   */
  rescuer: string[]
}

/** Describes measured values in which the confined space is considered safe to enter */
type Measurement = {
  /** The name of the value */
  name: string

  /** The maximum value that is allowed */
  max?: number

  /** The minimum value that is allowed */
  min?: number

  /** The unit of the measurement. */
  unit: string

  /**
   * Describes what the value is saying and how to optain the value. The
   * description might include the device used to measure, the location from
   * which the readout can be optained
   */
  description: string
}

/** A general categorization of hazards one might encounter in a confined space. */
enum HazardCategory {
  Physical = 'physical',
  Biological = 'biological',
  Chemical = 'chemical',
  Electrial = 'electrical',
  Ergonomical = 'ergonomical',
  Psychological = 'psychological',
  Other = 'other'
}

type Hazard = {
  /**
   * The overall category of the hazard.
   *
   * @example
   *   physical - The hazard is a physical hazard
   */
  category: HazardCategory

  /**
   * A granular description of the hazard.
   *
   * @example
   *   moving machinery
   */
  name: string

  /** A more descriptive depiction of the hazard. */
  description: string

  /**
   * Possible steps to mitigate the hazard. This can either be a textual
   * explaination or a measurement that has to be taken.
   */
  mitigation: string[]

  /** Parameters in which the hazard is considered safe. */
  measurements: Measurement[]

  /**
   * Any equipment that might be used or required by either the entrants or the
   * emergency responders
   */
  safetyEquipments: Equipments
}

export default Hazard
