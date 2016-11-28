var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Timer = React.createClass({
    getInitialState: function() {
        return ({count: 0, countdownStatus: 'stopped'})
    },
    handleStatusChange: function(){
      this.setState=({countdownStatus:newStatus})
    },
    handleSetCountdown: function(){
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
                {renderControlArea()}
            </div>
        );
    }
});

module.exports = Timer;
