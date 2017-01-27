var React = require('react');

var Clock = require('Clock');
var ControlsTimer = require('ControlsTimer');

var Timer = React.createClass({

  getInitialState: function(){
    return {
      count: 0,
      timerStatus: 'stopped'
    }
  },

  handleStatusChange: function(newStatus){
    this.setState({
      timerStatus: newStatus
    })
  },

  componentDidUpdate: function(prevProps, prevState){
    if(this.state.timerStatus !== prevState.timerStatus){
      switch(this.state.timerStatus){
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count:0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer=undefined;
          break;
      }
    }
  },

  startTimer: function(){
    this.timer = setInterval(()=>{
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      })
    },1000);
  },

  componentWillUnmount: function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },

  render: function(){

    var {count, timerStatus} = this.state;

    return(
      <div>
          <p>TIMER</p>
          <Clock totalSeconds={count}/>
          <ControlsTimer timerStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    )
  }

});

module.exports = Timer;
