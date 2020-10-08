import React from 'react';
import logo from './logo.svg';
import './App.css';

// import HttpGetRequest from './component/HttpGetRequest';
import HttpPostRequest from './component/HttpPostRequest';

function App() {
  return (
    <div className="App">
      {/* <HttpGetRequest /> */}
      <HttpPostRequest />
    </div>
  );
}

export default App;
