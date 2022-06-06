// Guide: https://duncanleung.com/typescript-module-declearation-svg-img-assets/
// https://www.typescriptlang.org/docs/handbook/modules.html#wildcard-module-declarations
// https://medium.com/@sampsonjoliver/importing-html-files-from-typescript-bd1c50909992

// https://stackoverflow.com/questions/39877156/how-to-extend-string-prototype-and-use-it-next-in-typescript

interface Array<T> {
  last(): T | undefined
  first(): T | undefined
  merge(): Record<string, unknown>
  sum(this: Array<number>): number
  avg(this: Array<number>): number | undefined
  cleanMap<U>(
    callbackfn: (value: T, index: number, array: T[]) => U | undefined,
    thisArg?: any
  ): U[]
}
