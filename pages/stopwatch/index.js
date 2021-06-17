import React, { Component } from "react";


class Stopwatch extends Component {
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };

    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };

    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
    };

    render() {
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        return (
            <div className="box-content bg-gray-500 h-55 w-50 p-10 border-4 border-black mt-48 mb-60 ml-5 mr-5">
                <div className="text-3xl text-center mt-4 font-mono text-green-200">Stopwatch</div>
                <div className="text-center text-2xl mr-30 font-mono">
                    {hours} : {minutes} : {seconds} : {centiseconds}
                </div>
                {this.state.timerOn === false && this.state.timerTime === 0 && (
                    <button className='text-green-500 box-content border-2 border-black bg-gray-500 p-4 mt-5' onClick={this.startTimer}>Start</button>
                )}
                {this.state.timerOn === true && (
                    <button className='text-red-500 box-content border-2 border-black bg-gray-500 p-4 mt-5' onClick={this.stopTimer}>Stop</button>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                    <button className='text-green-500 box-content border-2 border-black bg-gray-500 p-4 mt-5' onClick={this.startTimer}>Resume</button>
                )}
                {this.state.timerOn === false && this.state.timerTime > 0 && (
                    <button className='text-red-500 box-content border-2 border-black bg-gray-500 p-4 mt-5' onClick={this.resetTimer}>Reset</button>
                )}
            </div>
        );
    }
}

export default Stopwatch;