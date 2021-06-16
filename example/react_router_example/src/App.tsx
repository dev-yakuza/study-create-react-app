import { Switch, Route } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Detail } from './Pages/Detail';

function App() {
  return (
    <div>
      <header>This is header</header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail/:id">
          <Detail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
