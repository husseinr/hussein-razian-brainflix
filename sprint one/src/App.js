import React from 'react';
import PageHeader from './components/PageHeader/PageHeader';
import PageHero from './components/PageHero/PageHero';
import PageCommentsForm from './components/PageCommentsForm/PageCommentsForm';
import CommentsDisplayed from './components/PageEnteredComments/PageEnteredComments';
import PageNextVideo from './components/PageNextVideo/PageNextVideo';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <PageHero />
      <PageCommentsForm />
      <CommentsDisplayed />
      <PageNextVideo />
    </div>
  );
}

export default App;
