import React from 'react';
import Delete from './delete.js';

const Item = ({ text, onClick, todoState, id, onDelete }) => {
  return (
    <div className="item">
      <div
        className="flex-row"
        id={id}
        onClick={(event) => onClick(event.target.id)}
      >
        <div
          className="indicator"
          style={{
            backgroundColor: todoState.colour,
          }}
        ></div>
        <div
          className="title"
          style={{
            textDecorationLine: todoState.decoration,
          }}
        >
          {text}
        </div>
      </div>
      <Delete className={'delete'} onDelete={onDelete} id={id}></Delete>
    </div>
  );
};

export default Item;
