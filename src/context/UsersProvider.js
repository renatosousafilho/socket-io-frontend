
import React, { useState } from 'react';
import UsersContext from './UsersContext';

function Provider({ children }) {
  const [currentUsers, setCurrentUsers] = useState([]);
  const contextValue = {
    currentUsers,
    setCurrentUsers,
  };

  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
}

export default Provider;