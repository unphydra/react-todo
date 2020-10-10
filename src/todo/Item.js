import React from 'react';

const Item = ({ text, onClick, todoState, id }) => {
  return (
    <div
      className="item"
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
  );
};

export default Item;
