import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { StyledList } from './ContactList.style';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const getFilteredContacts = () => {
    console.log(contacts);
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <StyledList>
      {getFilteredContacts().map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} phone={number} />
      ))}
    </StyledList>
  );
};
