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

  /* I actually added <a /> first to make the first test 
  * pass, then added in each attribute after writing their tests. 
  * hard-coded the link for the moment (foo).
  */      
  return (
    <div data-tid="pagination" className="Pagination">
      <span>{label}</span>
      <a 
        href={previousUrl} 
        className="Pagination_Previous"
        data-tid="previous"/>
    </div>
  );
};

export default Pagination
