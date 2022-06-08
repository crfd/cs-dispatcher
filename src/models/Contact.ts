type Contact = {
  name: {
    first: string
    last: string
  }
  email: string
  phone: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
}

export default Contact
