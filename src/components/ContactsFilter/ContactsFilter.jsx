export const ContactsFilter = ({ filter, changeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={changeFilter} />
    </label>
  );
};
