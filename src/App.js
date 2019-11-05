import React from 'react';
import './App.css';
import Header from './Header.js'
import ForecastContainer from './ForecastContainer.js'

class App extends React.Component {
  render(){
    return (
      <Header title={"Weather Near You"}/>
      <ForecastContainer />
  );
  }
}

export default App;
