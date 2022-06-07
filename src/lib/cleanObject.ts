const cleanObject = (obj: Record<string, any>) => {
  let newObj: Record<string, any> = {}
  Object.keys(obj).forEach(key => {
    if (obj[key] === Object(obj[key])) newObj[key] = cleanObject(obj[key])
    else if (obj[key] !== undefined) newObj[key] = obj[key]
  })
  return newObj
}

export default cleanObject
