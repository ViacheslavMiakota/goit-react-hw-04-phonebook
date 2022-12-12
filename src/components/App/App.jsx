import React from 'react';
import { nanoid } from 'nanoid';
import { Container, Title, ContactTitle } from 'components/App/App.styled';
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

  formSubmitHandler = data => {
    console.log(data);
  };
  addContact = ({ name, number }) => {
    console.log(number);
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
    const { filter, contacts } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addContact} contacts={contacts} />
        <ContactTitle>Contacts</ContactTitle>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={this.getContacts()}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;

// Напиши застосунок зберігання контактів телефонної книги.

// Крок 1
// Застосунок повинен складатися з форми і списку контактів. На поточному кроці реалізуй додавання імені контакту та відображення списку контактів. Застосунок не повинен зберігати контакти між різними сесіями (оновлення сторінки).

// Використовуйте цю розмітку інпуту з вбудованою валідацією для імені контакту.

// <input
//   type="text"
//   name="name"
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//   required
// />

// Стан, що зберігається в батьківському компоненті <App>, обов'язково повинен бути наступного вигляду, додавати нові властивості не можна.

// state = {
//   contacts: [],
//   name: ''
// }

// Кожен контакт повинен бути об'єктом з властивостями name та id. Для генерації ідентифікаторів використовуй будь-який відповідний пакет, наприклад nanoid. Після завершення цього кроку, застосунок повинен виглядати приблизно так.

// component preview
// Крок 2
// Розшир функціонал застосунку, дозволивши користувачам додавати номери телефонів. Для цього додай <input type="tel"> у форму і властивість для зберігання його значення в стані.

// state = {
//   contacts: [],
//   name: '',
//   number: ''
// }

// Використовуй цю розмітку інпуту з вбудованою валідацією для номеру контакту.

// <input
//   type="tel"
//   name="number"
//   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//   required
// />

// Після завершення цього кроку, застосунок повинен виглядати приблизно так.

// component preview
// Крок 3
// Додай поле пошуку, яке можна використовувати для фільтрації списку контактів за ім'ям.

// Поле пошуку – це інпут без форми, значення якого записується у стан (контрольований елемент).
// Логіка фільтрації повинна бути нечутливою до регістру.
// state = {
//   contacts: [],
//   filter: '',
//   name: '',
//   number: ''
// }

// component preview
// Коли ми працюємо над новим функціоналом, буває зручно жорстко закодувати деякі дані у стан. Це позбавить необхідності вручну вводити дані в інтерфейсі для тестування роботи нового функціоналу. Наприклад, можна використовувати такий початковий стан.

// state = {
//   contacts: [
//     {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
//   ],
//   filter: '',
//   name: '',
//   number: ''
// }

// Крок 4
// Якщо твій застосунок реалізований в одному компоненті <App>, виконай рефакторинг, виділивши відповідні частини в окремі компоненти. У стані кореневого компонента <App> залишаться тільки властивості contacts і filter.

// state = {
//   contacts: [],
//   filter: ''
// }

// Достатньо виділити чотири компоненти: форма додавання контактів, список контактів, елемент списку контактів та фільтр пошуку.

// Після рефакторингу кореневий компонент застосунку виглядатиме так.

// <div>
//   <h1>Phonebook</h1>
//   <ContactForm ... />

//   <h2>Contacts</h2>
//   <Filter ... />
//   <ContactList ... />
// </div>

// Крок 5
// Заборони користувачеві можливість додавати контакти, імена яких вже присутні у телефонній книзі. При спробі виконати таку дію виведи alert із попередженням.

// component preview
// Крок 6
// Розшир функціонал застосунку, дозволивши користувачеві видаляти раніше збережені контакти.
