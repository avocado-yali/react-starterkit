import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

class App extends React.Component {
  
  render() {
    return (
      <div>
        <Header />
        <div className="content">
          <RouteHandler/>
        </div>
        <Footer />
      </div>
    );
  }
  
}

export default App;