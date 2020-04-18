/** 
 * Had to change the file type to TypeScript for interface.
 */ 
import React, { ReactElement } from 'react'

interface Props {
  label?: string
};


const Pagination = (props: Props): ReactElement => {
  const {
    label
  } = props;
  
  return (
    <div data-tid="pagination" className="Pagination">
      <span>{label}</span>
    </div>
  );
};

export default Pagination
