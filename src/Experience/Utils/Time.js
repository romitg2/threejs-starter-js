import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter {
  constructor() {
    super();

    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 16;

    this.tick();
  }

  tick() {
    const currentTime = Date.now();
    this.elapsed = currentTime - this.start;
    this.delta = currentTime - this.current;
    this.current = currentTime;

    this.trigger("tick");

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}
