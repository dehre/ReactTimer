var React = require('react');

var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({

  render: function(){
    return(
      <div className="row">
        <div className="columns small-6 large-4 small-centered columns">
          <p>TIMER</p>
          <Clock />
          <Controls />
        </div>
      </div>
    )
  }

});

module.exports = Timer;
