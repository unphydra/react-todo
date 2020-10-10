import React from 'react';

const itemState = {
  notDone: { colour: 'mediumseagreen', decoration: 'none' },
  doing: { colour: 'orange', decoration: 'none' },
  done: { colour: 'lightblue', decoration: 'line-through' },
};

itemState.notDone.next = itemState.doing;
itemState.doing.next = itemState.done;
itemState.done.next = itemState.notDone;

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

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleInput = props.handleInput;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState(() => ({ value }));
  }

  handleKeyPress(key) {
    if (key === 'Enter') {
      this.handleInput(this.state.value);
      this.handleChange('');
    }
  }

  render() {
    return (
      <input
        value={this.state.value}
        onKeyDown={(event) => this.handleKeyPress(event.key)}
        onChange={(event) => this.handleChange(event.target.value)}
      ></input>
    );
  }
}

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
        <h3>Todo</h3>
        {items}
        <Input handleInput={this.handleInput}></Input>
      </div>
    );
  }
}

export default Todo;
