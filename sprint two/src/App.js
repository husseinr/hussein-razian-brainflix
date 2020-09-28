import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import PageHeader from './components/PageHeader/PageHeader';
import MainVideoPage from './components/MainVideoPage/MainVideoPage';
import PageUploadVideo from './components/PageUploadVideo/PageUploadVideo'

function App () {

  return (
    <BrowserRouter>
        <div className="App">
          <PageHeader />
          <Switch>
            <Route path="/" exact component={MainVideoPage}/>
            <Route path="/upload" component={PageUploadVideo}/>
            <Route path="/:id" component={MainVideoPage}/>
          </Switch>
        </div>
    </BrowserRouter>
  )
}

export default App;
