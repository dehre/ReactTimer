var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer',function(){

  it('should exist',()=>{
    expect(Timer).toExist();
  });

  describe('handleStartTimer', ()=>{
    it('should start updating time', (done)=>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe('started');

      setTimeout(()=>{
        expect(timer.state.count).toBe(1);
        done();
      },1001);
    });

    it('should pause count on paused status', (done)=>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(()=>{
        timer.handleStatusChange('paused');
        expect(timer.state.count).toBe(1);
        expect(timer.state.timerStatus).toBe('paused');

        setTimeout(()=>{
          expect(timer.state.count).toBe(1);
          expect(timer.state.timerStatus).toBe('paused');
        },2001)

        done();
      }, 1001);
    });

    it('should clear count on stopped status', (done)=>{
      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange('started');

      setTimeout(()=>{
        timer.handleStatusChange('stopped');
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 1001);
    });

  });
});
