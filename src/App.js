import React, { Suspense } from 'react'

// css
import './App.css';

// components
import Landing from './Routes/Landing/Index'
import Button from './Routes/Buttons/Index'
import Navigation from './Routes/Navigation/Index'

// Shared Component
import NavigationBar from './Components/NavigationBar';

// Library
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Suspense>

          <Route exact path='/'>
            <Landing />
          </Route>

          <Route exact path='/button'>
            <Button />
          </Route>

          <Route exact path='/navigation'>
            <Navigation />
          </Route>

        </Suspense>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
