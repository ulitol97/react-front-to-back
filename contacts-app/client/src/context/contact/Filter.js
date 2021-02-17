import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";

const Filter = () => {
  const { filter, filterContacts, setFilter, clearFilter } = useContext(
    ContactContext
  );

  function onChange(e) {
    if (e) setFilter(e.target.value);
    const filter = e.target.value.trim();

    if (!filter) clearFilter();
    else {
      filterContacts(filter);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        value={filter}
        type="text"
        placeholder="Filter..."
        onChange={onChange}
      ></input>
    </form>
  );
};

export default Filter;
