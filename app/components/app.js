var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var BackboneReactMixin = require('backbone-react-component');

var App = React.createClass({
  mixins: [BackboneReactMixin],
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="inbox">Inbox</Link></li>
            <li><Link to="calendar">Calendar</Link></li>
          </ul>
        </header>

        <RouteHandler/>
      </div>
    );
  }
});

module.exports = App;