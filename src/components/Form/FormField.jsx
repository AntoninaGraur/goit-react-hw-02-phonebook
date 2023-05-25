import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
  };

  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    if (name.trim() === '') {
      return;
    }
    const contact = {
      id: nanoid(),
      name: name,
    };
    this.props.addContact(contact);
    this.setState({ name: '' });
  };

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={this.handleChange}
        />
        <input
          type="tel"
          name="number"
          required
        />
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
