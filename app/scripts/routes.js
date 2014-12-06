var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('./pages/app.jsx');
var Home = require('./pages/home.jsx');
var Info = require('./pages/info.jsx');
var NotFound = require('./pages/notFound.jsx');

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="info" handler={Info} />
    <Route name="home" handler={Home} />
    <DefaultRoute handler={Home}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

module.exports = routes;