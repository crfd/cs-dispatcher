enum PersonType {
  Entrant,
  Bystanders,
  Attendee,
  Rescuer,
  Employee,
  Dispatcher,
  QualifiedPerson
}

// TODO: Maybe rename to Person
type Contact = {
  type: PersonType[]
  name: {
    first: string
    last: string
  }
  email: string
  phone: string
  address?: {
    street?: string
    city?: string
    state?: string
    zip?: string
    country?: string
  }
  birthday?: Date
  image?: Document
  height?: number
  weight?: number
}

export default Contact
