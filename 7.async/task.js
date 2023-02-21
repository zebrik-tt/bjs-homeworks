class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: true,
    });
  }

  removeClock(time) {
    let results = this.alarmCollection.filter((item) => item.time !== time);
    if (results !== -1) {
      this.alarmCollection = results;
    }
  }

  getCurrentFormattedTime() {
    let now = new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return now;
  }

  start() {
    if (this.intervalId) {
      return;
    } else {
      this.intervalId = setInterval(() => {
        this.alarmCollection.forEach((element) => {
          if (element.time === this.getCurrentFormattedTime()) {
            element.canCall = false;
            element.callback();
          }
        });
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((element) => {
      element.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
