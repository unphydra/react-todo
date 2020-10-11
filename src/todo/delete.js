import React from 'react';

const Delete = ({ className, onDelete, id }) => (
  <div className={className} onClick={() => onDelete(id)}>
    x
  </div>
);

export default Delete;
