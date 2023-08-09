// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {isClockRunning: false, timeInSeconds: 0, timeInMinutes: 25}

  componentDidMount() {
    const timerId = setInterval(this.timeRunning, 1000)
  }

  timeRunning = () => {
      this.setState(prevState=> ({
          timeInSeconds: prevState.timeInSeconds.
      }))
  }

  onStartOrPause = () => {
    this.setState(prevState => ({
      isClockRunning: !prevState.isClockRunning,
    }))
  }

  onDecreaseTime = () => {
    const {timeInMinutes} = this.state
    if (timeInMinutes > 0) {
      this.setState(prevState => ({
        timeInMinutes: prevState.timeInMinutes - 1,
      }))
    }
  }

  onIncreaseTime = () => {
    this.setState(prevState => ({
      timeInMinutes: prevState.timeInMinutes + 1,
    }))
  }

  render() {
    const {isClockRunning, timeInMinutes, timeInSeconds} = this.state
    const startOrPauseImg = isClockRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png '
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'

    const altText = isClockRunning ? 'pause icon' : 'play icon'

    return (
      <div className="digital-timer-app-container">
        <h1>Digital Timer</h1>
        <div className="container">
          <div className="clock-container">
            <div className="time-container">
              <h1 className="time">
                {timeInMinutes}:{timeInSeconds}
              </h1>
              <p className="clock-status">
                {' '}
                {isClockRunning ? 'Running' : 'Paused'}{' '}
              </p>
            </div>
          </div>
          <div className="controls-container">
            <div className="clock-controllers-container">
              <button
                onClick={this.onStartOrPause}
                type="button"
                className="start-or-pause-button"
              >
                <img
                  className="start-or-pause-img"
                  src={startOrPauseImg}
                  alt={altText}
                />
                <h1 className="start-or-pause-status-text">
                  {isClockRunning ? 'Pause' : 'Start'}
                </h1>
              </button>
              <button type="button" className="start-or-pause-button">
                <img
                  className="start-or-pause-img"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                />
                <h1 className="start-or-pause-status-text">Reset</h1>
              </button>
            </div>
            <p className="guideline">Set Timer limit</p>
            <div className="set-timer-limit-container">
              <button
                onClick={this.onDecreaseTime}
                type="button"
                className="set-time-button"
              >
                -
              </button>
              <h1 className="time-limit">
                {timeInMinutes}:{timeInSeconds}
              </h1>
              <button
                onClick={this.onIncreaseTime}
                type="button"
                className="set-time-button"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
