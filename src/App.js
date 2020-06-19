import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'
import Jumbotron from './components/Jumbot'
import CardDecks from './components/CardDecks'
import CountrySearch from './components/CountrySearch'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
return (
      <React.Fragment>
        <Header/>
        {/*<Navigation/>*/}
        <Jumbotron/>
        <CardDecks/>
        <CountrySearch/> 
        <Footer/>
      </React.Fragment> 
  );
}

export default App;
