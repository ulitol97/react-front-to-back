import React, { useContext, useRef } from "react";
import ContactContext from "../../context/contact/contactContext";

const Filter = () => {
  const text = useRef();

  const { filterContacts, clearFilter } = useContext(ContactContext);

  function onChange() {
    const filter = text.current.value?.trim();

    if (!filter) clearFilter();
    else filterContacts(filter);
  }

  function onSubmit(e) {
    e.preventDefault();
    onChange();
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        ref={text}
        type="text"
        placeholder="Filter..."
        onChange={onChange}
      ></input>
    </form>
  );
};

export default Filter;
