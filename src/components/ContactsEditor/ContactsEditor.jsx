import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactsTitle, AddForm, FormLabel } from './ContactsEditor.styled';

export class ContactsEditor extends Component {
  static propTypes = {
    text: PropTypes.string,
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { addContact } = this.props;

    e.preventDefault();

    addContact(this.state);

    this.resetName();
  };

  resetName = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const { text } = this.props;

    return (
      <>
        {text && <ContactsTitle>{text}</ContactsTitle>}

        <AddForm onSubmit={this.handleSubmit}>
          <FormLabel>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
            />
          </FormLabel>

          <FormLabel>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              value={number}
              onChange={this.handleChange}
              required
            />
          </FormLabel>
          <button type="submit">Add Contact</button>
        </AddForm>
      </>
    );
  }
}
