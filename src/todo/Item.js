import React from 'react';
import Delete from './delete.js';

const Indicator = (className, colour) => (
  <div
    className={className}
    style={{
      backgroundColor: colour,
    }}
  ></div>
);

const Item = ({ text, onClick, todoState, id, onDelete }) => {
  return (
    <div className="item">
      <div
        className="flex-row"
        id={id}
        onClick={(event) => onClick(event.target.id)}
      >
        <Indicator
          className="indicator"
          colour={todoState.colour}
        ></Indicator>
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
