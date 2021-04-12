import React from 'react';

import InitialScreen from './InitialScreen';
import Chat from './Content';

import { useChatScreenState } from '../../../contexts/chat-screen';

function Body({user}) {
  const { display } = useChatScreenState();

  console.log(user);

  return (
    <>
      {display ? (
        <>
          <Chat user={user} />
        </>
      ) : (
        <InitialScreen />
      )}
    </>
  );
}

export default Body;