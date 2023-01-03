import { useState, useEffect } from 'react';

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

const contactDefault = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? contactDefault
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    setContacts([newContact, ...contacts]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getContacts = () => {
    const normalFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalFilter)
    );
  };

  const deleteContact = contactId => {
    console.log(contacts);
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} contacts={contacts} />
      <ContactTitle>Contacts</ContactTitle>

      {contacts.length > 0 ? (
        <>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList contacts={getContacts()} onDelete={deleteContact} />
        </>
      ) : (
        <Warning>
          Your phone book is empty, your first contact has been added
        </Warning>
      )}
    </Container>
  );
};
export default App;

// class App extends React.Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   componentDidMount() {
//     console.log('App componentDidMount');
//     const contacts = localStorage.getItem('contacts');
//     console.log(contacts);
//     const parsedContacts = JSON.parse(contacts);
//     console.log(parsedContacts);
//     if (parsedContacts > 0) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log('App componentDidUpdate');
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = ({ name, number }) => {
//     const newContact = {
//       id: nanoid(),
//       name,
//       number,
//     };
//     this.setState(({ contacts }) => ({
//       contacts: [newContact, ...contacts],
//     }));
//   };

//   changeFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };
//   getContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalFilter = filter.toLowerCase();
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalFilter)
//     );
//   };
//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { filter, contacts } = this.state;
//     console.log(contacts.length);
//     return (
//       <Container>
//         <Title>Phonebook</Title>
//         <ContactForm onSubmit={this.addContact} contacts={contacts} />
//         <ContactTitle>Contacts</ContactTitle>

//         {contacts.length > 0 ? (
//           <>
//             <Filter value={filter} onChange={this.changeFilter} />
//             <ContactList
//               contacts={this.getContacts()}
//               onDelete={this.deleteContact}
//             />
//           </>
//         ) : (
//           <Warning>
//             Your phone book is empty, your first contact has been added
//           </Warning>
//         )}
//       </Container>
//     );
//   }
// }

// export default App;
