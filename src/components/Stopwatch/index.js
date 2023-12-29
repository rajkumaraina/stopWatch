import {Component} from 'react'

import './index.css'

/* for Stop Button 
const newMin = stopWatchMin
    const newSec = stopWatchSec
    this.setState({stopWatchMin: newMin, stopWatchSec: newSec})
*/

class Stopwatch extends Component {
  state = {
    stopWatchMin: 0,
    stopWatchSec: 0,
    start: false,
    stop: false,
    reset: false,
  }

  StartButton = () => {
    console.log('start')
    this.TimerID = setInterval(this.tick, 1000)
    this.setState({start: true, stop: false, reset: false})
  }

  StopButton = () => {
    console.log('stop')
    const {stopWatchMin, stopWatchSec} = this.state
    clearTimeout(this.TimerID)
    this.setState({stop: true, start: false, reset: false})
  }

  ResetButton = () => {
    console.log('reset')
    clearInterval(this.TimerID)
    this.setState({
      stopWatchMin: 0,
      stopWatchSec: 0,
      stop: false,
      start: false,
      reset: true,
    })
  }

  tick = () => {
    const {stopWatchMin, stopWatchSec} = this.state
    if (stopWatchSec === 59) {
      this.setState(prevState => ({
        stopWatchMin: prevState.stopWatchMin + 1,
        stopWatchSec: 0,
      }))
    } else {
      this.setState(prevState => ({stopWatchSec: prevState.stopWatchSec + 1}))
    }
  }

  render() {
    const {stopWatchMin, stopWatchSec, stop, start, reset} = this.state
    let secLessThan10
    let minLessThan10
    if (stopWatchSec < 10) {
      secLessThan10 = true
    } else {
      secLessThan10 = false
    }
    if (stopWatchMin < 10) {
      minLessThan10 = true
    } else {
      minLessThan10 = false
    }
    return (
      <div className="MainContainer">
        <h1 className="heading">StopWatch</h1>
        <div className="StopWatchContainer">
          <div className="stopWatchImgContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timerImg"
            />
            <p className="para">Timer</p>
          </div>
          <h1 className="timerHead">
            {minLessThan10 ? `0${stopWatchMin}` : stopWatchMin}:
            {secLessThan10 ? `0${stopWatchSec}` : stopWatchSec}
          </h1>
          <div className="buttonContainer">
            <button
              className="button1"
              type="button"
              onClick={start ? null : this.StartButton}
            >
              Start
            </button>
            <button
              className="button2"
              type="button"
              onClick={stop ? null : this.StopButton}
            >
              Stop
            </button>
            <button
              className="button3"
              type="button"
              onClick={reset ? null : this.ResetButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
