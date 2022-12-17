import React from 'react';
import { nanoid } from 'nanoid';
import {
  Container,
  Title,
  ContactTitle,
  Warning,
} from 'components/App/App.styled';
import ContactForm from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    console.log('App componentDidMount');
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('Нові контакти');
      localStorage.setItem('contacs', JSON.stringify(this.state.contacts));
    }
  }
  componentWillUnmount() {
    console.log('App componentWillUnmount');
  }
  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getContacts = () => {
    const { filter, contacts } = this.state;
    const normalFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalFilter)
    );
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    console.log('app render');
    const { filter, contacts } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} contacts={contacts} />
        <ContactTitle>Contacts</ContactTitle>
        {contacts.length > 0 ? (
          <>
            <Filter value={filter} onChange={this.changeFilter} />
            <ContactList
              contacts={this.getContacts()}
              onDelete={this.deleteContact}
            />
          </>
        ) : (
          <Warning>
            Your phone book is empty, your first contact has been added
          </Warning>
        )}
      </Container>
    );
  }
}

export default App;
