export default class Robot {
  constructor(name = "default name") {
    console.log("robot class created");
    this.name = name;
  }

  sayHi() {
    console.log("Hi from ", this.name);
  }
}
