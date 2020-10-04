import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import MainVideoPage from './components/MainVideoPage/MainVideoPage';

function App () {

  return (
    <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={MainVideoPage}/>
            <Route path="/:id" component={MainVideoPage}/>
          </Switch>
        </div>
    </BrowserRouter>
  )
}

export default App;
