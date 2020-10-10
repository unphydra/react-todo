import React from 'react';
import Item from './Item';
import Input from './Input';

const itemState = {
  notDone: { colour: 'lightblue', decoration: 'none' },
  doing: { colour: 'orange', decoration: 'none' },
  done: { colour: 'mediumseagreen', decoration: 'line-through' },
};

itemState.notDone.next = itemState.doing;
itemState.doing.next = itemState.done;
itemState.done.next = itemState.notDone;

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.id = 0;

    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleClick(id) {
    const list = this.state.list.slice();
    const item = list.find((l) => l.id === +id);
    item.todoState = item.todoState.next;
    this.setState(() => ({ list }));
  }

  handleInput(title) {
    const list = this.state.list.slice();
    list.push({
      name: title,
      todoState: itemState.notDone,
      id: this.id++,
    });
    this.setState(() => ({ list }));
  }

  render() {
    const items = this.state.list.map((item) => (
      <Item
        text={item.name}
        key={item.id}
        id={item.id}
        todoState={item.todoState}
        onClick={this.handleClick}
      ></Item>
    ));

    return (
      <div>
        <h1>Todo</h1>
        {items}
        <Input
          className="itemInput"
          handleInput={this.handleInput}
        ></Input>
      </div>
    );
  }
}

export default Todo;
