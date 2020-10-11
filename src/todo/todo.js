import React from 'react';
import Item from './Item';
import Input from './Input';
import itemState from './itemState';
import Heading from './heading';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Todo',
      list: [],
    };
    this.id = 0;

    this.handleClick = this.handleClick.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick(id) {
    const list = this.state.list.slice();
    const title = this.state.title;
    const item = list.find((l) => l.id === +id);
    item.todoState = item.todoState.next;
    this.setState(() => ({ list, title }));
  }

  handleInput(input) {
    const list = this.state.list.slice();
    const title = this.state.title;
    list.push({
      name: input,
      todoState: itemState.notDone,
      id: this.id++,
    });
    this.setState(() => ({ list, title }));
  }

  handleTitleChange(name) {
    const list = this.state.list.slice();
    this.setState(() => ({ list, title: name }));
  }

  handleDelete(id) {
    const list = this.state.list.slice();
    const title = this.state.title;
    const index = list.findIndex((l) => l.id === +id);
    list.splice(index, 1);
    this.setState(() => ({ list, title }));
  }

  render() {
    const items = this.state.list.map((item) => (
      <Item
        text={item.name}
        key={item.id}
        id={item.id}
        todoState={item.todoState}
        onClick={this.handleClick}
        onDelete={this.handleDelete}
      ></Item>
    ));

    return (
      <div className="main_container">
        <Heading
          title={this.state.title}
          onChange={this.handleTitleChange}
        ></Heading>
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
