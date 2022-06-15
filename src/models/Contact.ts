enum PersonType {
  Dispatcher,
  Entrant,
  Bystanders,
  Attendee,
  Rescuer,
  Employee,
  QualifiedPerson
}

// TODO: Maybe rename to Person
type Contact = {
  type: PersonType[]
  name: string
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
