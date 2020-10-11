import React from 'react';
import Input from './Input';

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editable: false };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState(() => ({ editable: true }));
  }

  handleChange(name) {
    this.props.onChange(name);
    this.setState(() => ({ editable: false }));
  }

  render() {
    return this.state.editable ? (
      <Input
        text={this.props.title}
        className="heading"
        handleInput={this.handleChange}
      ></Input>
    ) : (
      <div className={'heading heading2'} onClick={this.handleClick}>
        {this.props.title}
      </div>
    );
  }
}

export default Heading;
