class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные параметры')
    }

    if (this.alarmCollection.find((Element) => Element[time] === time)) {
      console.warn("Уже присутствует звонок на это же время");
    }

    this.alarmCollection.push({
      callback,
      time,
      canCall: true
    })
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter((Element) => Element.time !== time);
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((Element) => {
        if (Element.time === this.getCurrentFormattedTime() && Element.canCall === true) {
          Element.canCall = false;
          Element.callback();
        }
      })
    }, 1000)
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((Element) => {
      Element.canCall = true;
    })
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}