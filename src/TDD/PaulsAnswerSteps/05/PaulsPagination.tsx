import React, { ReactElement } from 'react'

interface Props {
  label?: string
};


const Pagination = (props: Props): ReactElement | null => {
  const {
    label
  } = props;
  
  // Do no render the component if the label is blank
  if (!label) { return null };

  return (
    <div data-tid="pagination" className="Pagination">
      <span>{label}</span>
    </div>
  );
};

export default Pagination
