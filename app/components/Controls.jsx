var React = require('react');

var Controls = React.createClass({

  render: function(){
    return(
      <div>
        <button className="button success">Start</button>
        <button className="button alert">Stop</button>
      </div>
    )
  }

});

module.exports = Controls;
