import router from '../router'

/**
 * Gets the current windows location search params object
 * @returns {URLSearchParams}
 */
function getSearchParams() {
  return new URLSearchParams(window.location.search)
}

/**
 * Returns an object of all query params
 * @returns {object}
 */
function getQueryParams(): object {
  const a: Record<string, string> = {}
  // https://github.com/Microsoft/TypeScript/issues/23174#issuecomment-379044619
  for (let pair of getSearchParams().entries()) {
    a[pair[0]] = pair[1]
  }
  return a
}

/**
 * Returns the value of the query parameter with the given name
 * @param name The name of the parameter to get
 * @returns { string | undefined } When avialable, the value of the parameter gets returned
 */
function getQueryParam(name: string): string | undefined {
  return getSearchParams().get(name) ?? undefined
}

function setQueryParam(name: string, value?: string) {
  router.replace({ query: { [name]: value } })
}

/**
 * Set multiple parameters at once
 * @param params An object of query params to set
 */
function setQueryParams(params: Record<string, any>) {
  const searchParams = getSearchParams()
  for (let key in params) {
    searchParams.set(key, JSON.stringify(params[key]))
  }
  window.location.search = searchParams.toString()
}

/**
 * Removes the query parameter with the given name
 * @param name the name of the parameter to remove
 */
function removeQueryParam(name: string) {
  router.replace({ query: { [name]: undefined } })
}

/**
 * Remove all provided query parameters
 * @param names An array of query parameter names to remove
 */
function removeQueryParams(names: string[]) {
  const query = names.reduce((o, name) => {
    return { name, ...o }
  }, {})

  router.replace({ query })
}

export {
  getQueryParams,
  getQueryParam,
  setQueryParam,
  setQueryParams,
  removeQueryParam,
  removeQueryParams
}
