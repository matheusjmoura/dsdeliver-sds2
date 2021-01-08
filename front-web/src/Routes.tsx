import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/index';
import Navbar from './NavBar/index';
import Orders from './Orders/index';

function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
