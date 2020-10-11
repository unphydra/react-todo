import React from 'react';
import Item from './item';

const Items = ({ items, handleClick, handleItemDelete }) => {
  const itemsComp = items.map((item) => (
    <Item
      text={item.name}
      key={item.id}
      id={item.id}
      todoState={item.todoState}
      onClick={handleClick}
      onDelete={handleItemDelete}
    ></Item>
  ));
  return <div>{itemsComp}</div>;
};

export default Items;
