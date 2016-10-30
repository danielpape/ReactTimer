var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">React Timer App</li>
          <li><Link to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Timer</Link></li>
          <li><Link to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Countdown</Link></li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            Created by <Link to="http://danielpape.co.uk">Daniel Pape</Link>
          </li>
        </ul>
      </div>
    </div>
  ) ;
};

module.exports = Nav;
