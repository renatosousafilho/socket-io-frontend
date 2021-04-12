import Chat from './pages/Chat';
import PrivateChat from './pages/PrivateChat';

import { Router, Switch, Route } from "react-router-dom";
import UsersProvider from './context/UsersProvider';

import { ChatScreenProvider } from './contexts/chat-screen';
import { ContactsDataProvider } from './contexts/contacts';

import history from './services/history'

function App() {
  return (
    <ChatScreenProvider>
      <ContactsDataProvider>
        <UsersProvider>
          <Router history={history}>
            <Switch>
              <Route exact path="/" component={Chat} />
            </Switch>
          </Router>
        </UsersProvider>
      </ContactsDataProvider>
    </ChatScreenProvider>
  );
}
  
export default App;
  