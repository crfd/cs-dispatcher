export interface FakeAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: {
    lat: string
    lng: string
  }
}

export interface FakeUser {
  id: number
  name: string
  email: string
  phone: string
  address: FakeAddress
}

async function fetchFakeUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const json = await res.json()
  return json as FakeUser[]
}

export default fetchFakeUsers
