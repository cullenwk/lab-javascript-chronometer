class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime = this.currentTime + 1;
      
  }, 1000)

  return callback
  }

  getMinutes() {
    let minutes = Math.floor(this.currentTime/60)
    return minutes
    
  }

  getSeconds() {
    let seconds = Math.floor(this.currentTime%60)
    return seconds
  }

  computeTwoDigitNumber(value) {
    let twoDigit = ("0" + value).slice(-2)
    

    return twoDigit;

    
     
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
   this.currentTime = 0
  }

  split() {
    let stopWatch = this.computeTwoDigitNumber(this.getMinutes())
    let stopWatchSecond = this.computeTwoDigitNumber(this.getSeconds())

    return `${stopWatch}:${stopWatchSecond}` 


   
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

