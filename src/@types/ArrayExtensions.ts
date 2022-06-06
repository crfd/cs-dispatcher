Array.prototype.last = function () {
  return this[this.length - 1]
}

Array.prototype.first = function () {
  return this[0]
}

Array.prototype.sum = function (this: Array<number>): number {
  return this.reduce((a, b) => a + b, 0)
}

Array.prototype.avg = function (this: Array<number>): number | undefined {
  return this.length !== 0 ? this.sum() / this.length : undefined
}

Array.prototype.merge = function (): Record<string, unknown> {
  return this.reduce((a, b) => {
    return { ...a, ...b }
  })
}

Array.prototype.cleanMap = function <Input, Output>(
  callbackfn: (
    value: Input,
    index: number,
    array: Input[]
  ) => Output | undefined,
  thisArg?: any
): Output[] {
  return this.map(callbackfn, thisArg).filter(
    value => value !== undefined
  ) as Output[]
}
