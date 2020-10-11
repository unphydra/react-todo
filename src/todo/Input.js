import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: props.text ? props.text : '' };

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
        className={this.props.className}
        value={this.state.value}
        onKeyDown={(event) => this.handleKeyPress(event.key)}
        onChange={(event) => this.handleChange(event.target.value)}
      ></input>
    );
  }
}

export default Input;
