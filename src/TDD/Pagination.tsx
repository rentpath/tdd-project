/**
 * @fileoverview
 * The Pagination component is a very simple "dumb" component with no business
 * logic. It displays a label and navigation links based on the props passed
 * into it, but it does no calculation otherwise.
 */
import React, { ReactElement } from 'react'

/**
 * Props for the Pagination component, which displays something like:
 * 11-20 of 30 Properties <Previous Next>
 * @property label - Text label like "11-20 of 30 Properties".
 * - If null or empty string, then do not render anything for the component.
 * @property prevUrl - The URL for the previous page of results.
 * - Display as the "<Previous" link if present
 * - If null or empty string, then do not render the previous link.
 * @property nextUrl - The URL for the next page of results.
 * - Display as the "Next>" link if present.
 * - If null or empty string, then do not render the next link.
 */
interface Props {
  label?: string,
  previousUrl?: string,
  nextUrl?: string,
}

/**
 * Component to display the pagination navigation.
 */
const Pagination = (props: Props): ReactElement | null => {
  const {
    label,
    nextUrl,
    previousUrl,
  } = props

  // Do no render the component if the label is blank
  if (!label) { return null }

  return (
    <div data-tid="pagination" className="Pagination">
      <span>{label}</span>
      {
        // Render the previous link unless it is blank
        previousUrl && (
          <a
            className="Pagination_Previous"
            href={previousUrl}
            data-tid="previous"
          >
            &lt; Previous
          </a>
        )
      }
      {
        // Render the next link unless it is blank
        nextUrl && (
          <a
            className="Pagination_Next"
            href={nextUrl}
            data-tid="next"
          >
            Next &gt;
          </a>
        )
      }
    </div>
  )
}

export default Pagination
