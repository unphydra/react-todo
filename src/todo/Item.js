import React from 'react';

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
      <div className="delete" onClick={() => onDelete(id)}>
        x
      </div>
    </div>
  );
};

export default Item;
