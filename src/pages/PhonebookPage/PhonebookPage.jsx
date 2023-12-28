import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactsThunk } from '../../redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import {
  Container,
  StyledHeading,
  StyledMainHeading,
  StyledMessage,
} from './PhonebookPage.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import Loader from 'components/Loader/Loader';

const PhonebookPage = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return isLoading ? (
    <Loader></Loader>
  ) : (
    <Container>
      <StyledMainHeading>Phonebook</StyledMainHeading>
      <ContactForm />
      <StyledHeading>Contacts</StyledHeading>
      {contacts?.length ? (
        <div>
          <Filter />
          <ContactList />
        </div>
      ) : (
        <StyledMessage>
          You don't have any contacts in your phonebook yet.
        </StyledMessage>
      )}
      {error && <StyledMessage>{error}</StyledMessage>}
    </Container>
  );
};

export default PhonebookPage;
