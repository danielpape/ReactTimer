var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function() {
        return ({count: 0, countdownStatus: 'paused'})
    },
    startTimer: function() {
        this.timer = setInterval(() => {
            var newCount = this.state.count + 1;
            this.setState({
                count: newCount >= 0
                    ? newCount
                    : 0
            });
            if(newCount === 0){
              this.setState({countdownStatus: 'paused'});
            }
        }, 1000);
    },
    handleStatusChange: function(){
      this.setState=({countdownStatus:newStatus})
    },
    handleSetCountdown: function(seconds){
      this.setState=({countdownStatus:'started',count:seconds})
    },
    render: function() {
        var {countdownStatus, count} = this.state;
        var renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            } else {
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            }
        };
        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        );
    }
});

module.exports = Timer;
