import { Component } from 'react';
import Header from './layout/Header';
import Navzilla from './layout/Navzilla'
import Footer from './layout/Footer';

export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Navzilla />
        <Footer />
      </div>
    );
  }
}

// export default App;