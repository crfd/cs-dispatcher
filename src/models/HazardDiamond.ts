enum PropertyColor {
  Red,
  Blue,
  Yellow,
  White
}

enum Property {
  Flammability = 'flammability',
  Health = 'health',
  Reactivity = 'reactivity',
  SpecialNotice = 'specialNotice'
}

enum Severity {
  None = 0,
  Minor = 1,
  Moderate = 2,
  Severe = 3,
  Catastrophic = 4
}

enum SpecialNotice {
  None = '',
  OX = 'OX',
  W = 'W',
  SA = 'SA'
}

class HazardDiamond {
  flammability: Severity
  health: Severity
  reactivity: Severity
  specialNotice: SpecialNotice

  constructor(
    flamibility: Severity = Severity.None,
    health: Severity = Severity.None,
    reactivity: Severity = Severity.None,
    specialNotice: SpecialNotice = SpecialNotice.None
  ) {
    this.flammability = flamibility
    this.health = health
    this.reactivity = reactivity
    this.specialNotice = specialNotice
  }

  get(property: Property) {
    switch (property) {
      case Property.Flammability:
        return this.flammability
      case Property.Health:
        return this.health
      case Property.Reactivity:
        return this.reactivity
      case Property.SpecialNotice:
        return this.specialNotice
    }
  }

  red() {
    return this.flammability
  }

  blue() {
    return this.health
  }

  yellow() {
    return this.reactivity
  }

  white() {
    return this.specialNotice
  }

  hasSpecialNotice() {
    return this.specialNotice !== SpecialNotice.None
  }

  getTranslationKeys(): Record<Property, string> {
    return {
      [Property.Flammability]:
        'hazardDiamond.flammability.' + this.flammability,
      [Property.Health]: 'hazardDiamond.health.' + this.health,
      [Property.Reactivity]: 'hazardDiamond.reactivity.' + this.reactivity,
      [Property.SpecialNotice]:
        'hazardDiamond.specialNotice.' + this.specialNotice
    }
  }
}

export default HazardDiamond

export { PropertyColor, Property, Severity, SpecialNotice }
