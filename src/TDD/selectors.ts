/** @fileoverview
 * Utility functions to get data from the application state, and to perform
 * business logic to generate the props needed by the Pagination component.
 *
 * For the purposes of this training exercise, we will assume a very simple
 * application state. In addition we won't be using createSelector. You can
 * write utility functions to help with calculating various things.
 */

/** Number of properties to show on each page of results */
export const PROPERTIES_PER_PAGE = 30

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
   * If the url is "https://example.com/foo/bar?page=5"
   * then pathname would be "/foo/bar"
   */
  pathname: string,
}

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
 * - If there is only one page of results, return "n Properties"
 * - Otherwise return which items are currently shown, plus the total, like
 *   "11 - 30 of 300 Properties"
 * - Does not do any checking for invalid data, like if the page number would be
 *   greater than the total number of items. In that case you will get an
 *   invalid label. */
export const getPaginationLabel = (state: State): string => {
  const total = getTotal(state)
  const page = getPage(state)

  if (total < 1) { return '' }

  if (total <= PROPERTIES_PER_PAGE) {
    return `${total} Properties`
  }

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
  const pathname = getPathname(state)

  const begin = (page - 1) * PROPERTIES_PER_PAGE + 1
  const end = begin + PROPERTIES_PER_PAGE - 1

  // On last page there is no next url
  if (end >= total) { return '' }

  return `${pathname}?page=${page + 1}`
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
  const page = getPage(state)
  const pathname = getPathname(state)

  // If currently on the first page, there is no previous page
  if (page === 1) { return '' }

  // If currently on page two, then page one will have no "?page=1" parameter
  if (page === 2) { return pathname }

  // Otherwise subtract one from the page and add "?page=n" to the pathname
  return `${pathname}?page=${page - 1}`
}
