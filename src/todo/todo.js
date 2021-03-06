import React from 'react';
import Input from './input';
import itemState from './itemState';
import Heading from './heading';
import Items from './items';

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
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleTodoDelete = this.handleTodoDelete.bind(this);
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

  handleItemDelete(id) {
    const list = this.state.list.slice();
    const title = this.state.title;
    const index = list.findIndex((l) => l.id === +id);
    list.splice(index, 1);
    this.setState(() => ({ list, title }));
  }

  handleTodoDelete() {
    this.setState(() => ({ title: 'Todo', list: [] }));
  }

  render() {
    return (
      <div className="main_container">
        <Heading
          title={this.state.title}
          onChange={this.handleTitleChange}
          onDelete={this.handleTodoDelete}
        ></Heading>
        <Items
          items={this.state.list}
          handleClick={this.handleClick}
          handleItemDelete={this.handleItemDelete}
        ></Items>
        <Input
          className="itemInput"
          handleInput={this.handleInput}
        ></Input>
      </div>
    );
  }
}

export default Todo;
