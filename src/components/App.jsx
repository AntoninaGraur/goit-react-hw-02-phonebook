import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './Form/FormField';
import ContactList from './Contacts/ContactsFind';
import Filter from './Filter/Filter';

import { FormContainer, FormTitle } from './Form/FormField.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const existingContact = contacts.find((contact) => contact.name === name);

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number
    };

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId)
    }));
  };

  changeFilter = (filter) => {
    this.setState({ filter: filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <FormContainer>
        <FormTitle>Phonebook</FormTitle>
        <ContactForm onAddContact={this.addContact} />
        <FormTitle>Contacts</FormTitle>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </FormContainer>
    );
  }
}

export default App;
