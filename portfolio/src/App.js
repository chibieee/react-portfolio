import React, { Component } from 'react';

import Header from '../src/components/header.js';

import '../style/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
       I'm a Front End web developer from the Washington, DC Area. I've been using computers since a young age, and love problem solving. I currently want to advance my knowledge in current skills before advancing onto different languages/frameworks. As time progresses, i would like to eventually learn Back End development too.
      </div>
    );
  }
}

export default App;
