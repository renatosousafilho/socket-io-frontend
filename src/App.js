import Home from './components/Home';
import PrivateChat from './pages/PrivateChat';

import { Router, Switch, Route } from "react-router-dom";
import UsersProvider from './context/UsersProvider';

import history from './services/history'

function App() {
  return (
    <UsersProvider>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chat/:username" component={PrivateChat} />
        </Switch>
      </Router>
    </UsersProvider>
    
  );
}
  
export default App;
  