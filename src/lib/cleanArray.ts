function cleanArray<T>(array: (T | undefined)[]): T[] {
  return array.filter(value => value !== undefined) as T[]
}

export default cleanArray
