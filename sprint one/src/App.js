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
      <main>
        <PageHero />
        <PageCommentsForm />
        <section className="comment-entries">
          <CommentsDisplayed />
        </section>
        <section className="next">
          <h3 className="next__title">NEXT VIDEO</h3>
          <PageNextVideo />
        </section>
       
      </main>
    </div>
  );
}

export default App;
