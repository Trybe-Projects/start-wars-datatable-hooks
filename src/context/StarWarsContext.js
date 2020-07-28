import React, { createContext, useState } from 'react';

export const StarWarsContext = createContext();

const initialState = {
  apiRequest: {
    loading: true,
    error: '',
    headers: [],
    data: [],
  },
  filters: {
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'Name', sort: 'ASC' },
  },
};

export const Store = ({ children }) => {
  const [store, setStore] = useState(initialState);

  return (
    <StarWarsContext.Provider value={[store, setStore]}>
      {children}
    </StarWarsContext.Provider>
  );
};
