import React, {
  createContext, useReducer, useContext,
} from 'react';

const initialData = {
  id: 0,
  name: '',
  avatar: '',
  lastMessage: '',
  timeLastMessage: '',
  lastSeen: '',
  pinned: undefined,
  mute: undefined,
  unreadMessages: undefined,
};

const ContactsDataStateContext = createContext(initialData);
const ContactsDataDispatchContext = createContext();


function reducer(state, action) {
  switch (action.type) {
    case 'GET_CONTACTS_DATA':
      return { ...state };
    case 'SET_CONTACTS_DATA':
      return {
        ...state,
        id: action.payload.id,
        name: action.payload.name,
        avatar: action.payload.avatar,
      };
    default:
      return state;
  }
}

export const ContactsDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <ContactsDataDispatchContext.Provider value={dispatch}>
      <ContactsDataStateContext.Provider value={state}>
        { children }
      </ContactsDataStateContext.Provider>
    </ContactsDataDispatchContext.Provider>
  );
};

export const useContactsState = () => useContext(ContactsDataStateContext);
export const useContactsDispatch = () => useContext(ContactsDataDispatchContext);
