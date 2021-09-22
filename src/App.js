import './App.css';
import './core/style/reset.css';

// Views
import Header from './core/header/header';
import AsideMenu from './core/aside-menu/aside-menu';
import Dashboard from './views/dashboard/dashboard';
import Places from './views/places/places';
import PlacesForm from './views/places/places-form/places-form';
import Users from './views/users/users';
import UsersForm from './views/users/users-form/users-form'
import Config from './views/config/config';

// Modules
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="aside">
          <AsideMenu />
        </div>

        <div className="content">
          <Router>
            <Switch>
              <Route exact path="/home">
                <Dashboard />
              </Route>

              <Route exact path="/places">
                <Places />
              </Route>

              <Route path="/places/new">
                <PlacesForm />
              </Route>

              <Route exact path="/users">
                <Users />
              </Route>

              <Route exact path="/users/new">
                <UsersForm />
              </Route>

              <Route exact path="/users/:id">
                <UsersForm />
              </Route>

              <Route path="/config">
                <Config />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
