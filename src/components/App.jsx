import React, { Component } from 'react';
import ContactForm from './Form/FormField';
import ContactList from './Contacts/ContactsFind';




class App extends Component {
  state = {
    contacts: [],

    number: '',
  };

  addContact = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  addNumber = number => {
    this.state(prevState => ({
      number: [...prevState.number, number],
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        <ContactForm addContact={this.addContact} />
        <h1>Contact List</h1>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
