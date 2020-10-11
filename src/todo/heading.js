import React from 'react';
import Input from './input';
import Delete from './delete';

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
      <div className={'heading heading2'}>
        <div style={{ width: '280px' }} onClick={this.handleClick}>
          {this.props.title}
        </div>
        <Delete
          className="headingDelete"
          onDelete={this.props.onDelete}
        ></Delete>
      </div>
    );
  }
}

export default Heading;
