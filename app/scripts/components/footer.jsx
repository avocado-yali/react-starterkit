import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component{

  constructor(props, context) {
   super(props);
  }

  render() {
    return (
      <footer className="clearfix footer">
        Application Name

        <nav className="clearfix">
          <div className="nav-item">
            <Link to="home">foot link 1</Link>
          </div>
          <div className="nav-item">
            <Link to="info">foot link 2</Link>
          </div>
        </nav>
      </footer>
    );
  }

}

Footer.contextTypes = {
  router: React.PropTypes.func.isRequired
}

export default Footer;