class Feedback {
  name: string
  text: string
  files: File[]

  constructor(name: string, text: string, files: File[]) {
    this.name = name
    this.text = text
    this.files = files
  }
}

export default Feedback
