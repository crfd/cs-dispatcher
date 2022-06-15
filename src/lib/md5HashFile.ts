import { MD5 } from 'crypto-js'

/** Generates a hashed version of the provided File. */
async function md5HashFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    try {
      var reader = new FileReader()

      reader.onload = event => {
        const binary = event.target?.result as string
        const hash = MD5(binary).toString()
        resolve(hash)
      }
    } catch (error) {
      reject(error)
    }
  })
}

export default md5HashFile
