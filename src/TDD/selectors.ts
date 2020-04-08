/** @fileoverview
 * Utility functions to get data from the application state, and to perform
 * business logic to generate the props needed by the Pagination component.
 *
 * For the purposes of this training exercise, we will assume a very simple
 * application state. In addition we won't be using createSelector. You can
 * write utility functions to help with calculating various things.
 */

/** For the purposes of this training exercise, we will assume a very simple
 * application state. */
interface State {
  /** Total number of search results that were retrieved */
  total: number,

  /** Current page number that is being displayed.*/
  page: number,

  /** The pathname of the current page.
   * - Contains an initial '/' followed by the path of the url.
   * - Does not include the search/query string.
   * @example
   * If the url is "https://www.rent.com/georgia/decatur-apartments?page=5"
   * then pathname would be "/georgia/decatur-apartments"
   */
  pathname: string,
}

/** Number of properties to show on each page of results */
export const PROPERTIES_PER_PAGE = 30

/** Selector to get the total number of search results */
export const getTotal = (state: State): number => (state?.total || 0)

/** Selector to get the current page number.
 * - Defaults to page 1 if undefined
 * - Page 0 or negative pages are not valid, so returns page 1 */
export const getPage = (state: State): number => (state?.page || 1)

/** Selector to get the pathname.
 * - Defaults to '/' undefined */
export const getPathname = (state: State): string => (state?.pathname || '/')

/** Based on the current page and the total number of items, generate the label
 * to use for the pagination component.
 * - If there are zero search results return empty string (note this will cause
 *   the pagination component to not render at all)
 * - Does not do any checking for invalid data, like if the page number would be
 *   greater than the total number of items. In that case you will get an
 *   invalid label. */
export const getPaginationLabel = (state: State): string => {
  const total = getTotal(state)
  const page = getPage(state)

  if (total < 1) { return '' }

  const begin = (page - 1) * PROPERTIES_PER_PAGE + 1
  const end = begin + PROPERTIES_PER_PAGE - 1
  return `${begin} - ${end} of ${total} Properties`
}

/**
 * Based on the current page and the total number of items, generate the url for
 * the next page.
 * - Return empty string if there is no next page (that is, if we are already on
 *   the last page)
 * @example
 * If pathname is "/search", then
 * Page 1: "/search"
 * Page 2: "/search?page=2"
 */
export const getPaginationNextUrl = (state: State): string => {
  const total = getTotal(state)
  const page = getPage(state)

  return ''
}

/**
 * - Append a "?page=n" parameter to the current pathname to generate a url to a
 *   specific page.
 * - Return empty string if we are already on the first page (that is, if there
 *   is no previous page)
 * - The URL for page 1 should not have a "?page=1" parameter
 * @example
 * If pathname is "/search", then
 * Page 1: "/search"
 * Page 2: "/search?page=2"
 */
export const getPaginationPreviousUrl = (state: State): string => {
  const total = getTotal(state)
  const page = getPage(state)

  return ''
}
