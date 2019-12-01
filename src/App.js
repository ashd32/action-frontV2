import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import './App.css';

import Landing from "./Landing";
import Home from "./Home";
import Calendar from "./components/CalendarComponent/Calendar/Calendar";

function App() {
  return (
    <div className="App">
      <Router>
        <Route render={({ location, history }) => (
            <React.Fragment>
              <SideNav
                  onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                      history.push(to);
                    }
                  }}
              >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                  <NavItem eventKey="home">
                    <NavIcon>
                      <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                      Home
                    </NavText>
                  </NavItem>
                  <NavItem eventKey="calendar">
                    <NavIcon>
                      <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                      Calendar
                    </NavText>
                  </NavItem>
                </SideNav.Nav>
              </SideNav>
              <main>
                <Route path="/" exact component={props => <Landing />} />
                <Route path="/home" component={props => <Home />} />
                <Route path="/calendar" component={props => <Calendar />} />
              </main>
            </React.Fragment>
        )}
        />
      </Router>
    </div>
  );
}

export default App;
