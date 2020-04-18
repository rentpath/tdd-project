import React, { ReactElement } from 'react'

interface Props {
  label?: string,
  previousUrl?: string,
  nextUrl?: string,
};


const Pagination = (props: Props): ReactElement | null => {
  const {
    label,
    previousUrl,
    nextUrl
  } = props;
  
  // Do not render the component if the label is blank
  if (!label) { return null };
   
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
  );
};

export default Pagination
