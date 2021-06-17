import React, { Component } from "react";

class Countdown extends Component {

    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };

    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: this.state.timerTime
        });
        this.timer = setInterval(() => {
            const newTime = this.state.timerTime - 10;
            if (newTime >= 0) {
                this.setState({
                    timerTime: newTime
                });
            } else {
                clearInterval(this.timer);
                this.setState({ timerOn: false });
                alert("Countdown ended");
            }
        }, 10);
    };

    stopTimer = () => {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
    };
    resetTimer = () => {
        if (this.state.timerOn === false) {
            this.setState({
                timerTime: this.state.timerStart
            });
        }
    };

    adjustTimer = input => {
        const { timerTime, timerOn } = this.state;
        if (!timerOn) {
            if (input === "incHours" && timerTime + 3600000 < 216000000) {
                this.setState({ timerTime: timerTime + 3600000 });
            } else if (input === "decHours" && timerTime - 3600000 >= 0) {
                this.setState({ timerTime: timerTime - 3600000 });
            } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
                this.setState({ timerTime: timerTime + 60000 });
            } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
                this.setState({ timerTime: timerTime - 60000 });
            } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
                this.setState({ timerTime: timerTime + 1000 });
            } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
                this.setState({ timerTime: timerTime - 1000 });
            }
        }
    };


    render() {
        const { timerTime, timerStart, timerOn } = this.state;
        let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
        let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

        return (
            <div className="box-content border-2 mt-24 ml-5 mr-5 py-16 bg-gray-500 mb-80">
                <div className="text-center font-mono text-2xl text-green-200">Countdown</div>
                <div className="text-center font-hyeon text-xl">Hours : Minutes : Seconds</div>
                <div className="mr-85">
                    <button
                        onClick={() => this.adjustTimer("incHours")}>
                        &#8657;
                    </button>

                    <button
                        onClick={() => this.adjustTimer("incMinutes")}>
                        &#8657;
                    </button>

                    <button
                        onClick={() => this.adjustTimer("incSeconds")}>
                        &#8657;
                    </button>

                    <div className="text-center font-mono text-xl text-green-200">
                        {hours} : {minutes} : {seconds}
                    </div>

                    <button
                        onClick={() => this.adjustTimer("decHours")}>
                        &#8659;
                    </button>

                    <button
                        onClick={() => this.adjustTimer("decMinutes")}>
                        &#8659;
                    </button>

                    <button
                        onClick={() => this.adjustTimer("decSeconds")}>
                        &#8659;
                    </button>
                </div>

                {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
                    <button className="text-green-500 box-content bg-gray-500 p-4 border-4 mt-8" onClick={this.startTimer}>
                        Start
                    </button>
                )}
                {timerOn === true && timerTime >= 1000 && (
                    <button className="text-red-500 box-content bg-gray-500 p-4 border-4 mt-8" onClick={this.stopTimer}>
                        Stop
                    </button>
                )}
                {timerOn === false &&
                    (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
                        <button className="box-content bg-gray-500 p-4 border-4 mt-8" onClick={this.startTimer}>
                            Resume
                        </button>
                    )}

                {(timerOn === false || timerTime < 1000) &&
                    (timerStart !== timerTime && timerStart > 0) && (
                        <button className="text-red-500 box-content bg-gray-500 p-4 border-4 mt-8" onClick={this.resetTimer}>
                            Reset
                        </button>
                    )}
            </div>
        );
    }
}



export default Countdown;