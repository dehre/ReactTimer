var React = require('react');

var Clock = require('Clock');
var Controls = require('Controls');

var Countdown = React.createClass({

  render: function(){
    return(
      <div className="row">
        <div className="columns small-6 large-4 small-centered columns">
          <p>COUNTDOWN</p>
          <Clock totalSeconds={129}/>
          <Controls />
        </div>
      </div>
    )
  }

});

module.exports = Countdown;
