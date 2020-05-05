import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Homepage from '../src/components/views/Homepage/Homepage';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Tables';
import TablesBooking from '../src/components/views/Tables/TablesBooking';
import TablesEvents from '../src/components/views/Tables/TablesEvents';
import TablesEventsNew from '../src/components/views/Tables/TablesEventsNew';
import TablesEventsId from '../src/components/views/Tables/TablesEventsId';
import TablesBookingId from '../src/components/views/Tables/TablesBookingId';
import TablesBookingNew from '../src/components/views/Tables/TablesBookingNew';
import Waiter from '../src/components/views/Waiter/Waiter';
import WaiterOrderNew from '../src/components/views/Waiter/WaiterOrderNew';
import WaiterOrderId from '../src/components/views/Waiter/WaiterOrderId';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2b4c6f' },
    // secondary: { main: '#fff' },
  },
});

function App() {
  return (
    <BrowserRouter>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <div className="App">
              <header className="App-header">
                <p>
          Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
          Learn React! Right Now!
                </a>
              </header>
            </div>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
              <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking`} component={TablesBooking} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={TablesBookingNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={TablesBookingId} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/events`} component={TablesEvents} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={TablesEventsNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={TablesEventsId}/>
              <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/new`} component={WaiterOrderNew} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/:id`} component={WaiterOrderId} />
              <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
