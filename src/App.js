import React from 'react';
import './App.css';
import Row from './components/Row/Row'
import requests from './requests';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row 
        title="NETFLEX ORIGINALS"
        fetchUrl={requests.fetchNetflexOriginals}
        isLargeRow
      />
      <Row 
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />

      <Row 
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
      />

      <Row 
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />

      <Row 
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />

      <Row 
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />

      <Row 
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />

      <Row 
        title="Documentries"
        fetchUrl={requests.fetchDocumentries}
      />
    </div>
  );
}

export default App;
