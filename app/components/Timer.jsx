var React = require('react');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Timer = React.createClass({

  render: function(){
    return(
      <div>
          <p>TIMER</p>
          <Clock />
          <CountdownForm/>
      </div>
    )
  }

});

module.exports = Timer;
