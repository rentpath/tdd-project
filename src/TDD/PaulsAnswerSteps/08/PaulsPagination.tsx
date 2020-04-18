import React, { ReactElement } from 'react'

interface Props {
  label?: string,
  previousUrl?: string
};


const Pagination = (props: Props): ReactElement | null => {
  const {
    label,
    previousUrl
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
    </div>
  );
};

export default Pagination
