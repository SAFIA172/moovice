import React, { Component } from 'react';
import Discover from './components/Discover';
import DiscoverBattle from './components/DiscoverBattle';
import MyList from './components/MyList'
import Popular from './components/Popular'
import PopularBattle from './components/PopularBattle'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'> 
          <Router>
        <div>
          <nav>
            <ul>
              <li><Link to= "/">This week </Link></li>
              <li><Link to="/battle/">This week battle</Link></li>
              <li><Link to="/popular/">Popular</Link></li>
              <li><Link to="/popular-battle/">Popular battle</Link></li>
              <li><Link to="/my-list/">My list</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route exact path= "/">
              < Discover/>
            </Route>
            <Route path="/battle/">
              <DiscoverBattle />
            </Route>
            <Route  exact path="/popular">
              <Popular />
            </Route>
            <Route path="/popular-battle">
              <PopularBattle />
            </Route>
            <Route path="/my-list">
              <MyList />
            </Route>
          </Switch>
        </div>
      </Router>
      
      </div>
    );
  }
}

export default App;
