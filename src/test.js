import Robot from "./Robot";

class FlyingRobot extends Robot {
  constructor(name, legs) {
    super(name);
    this.legs = legs;
    console.log("flying robot class created");
  }
  fly() {
    console.log("I'm flying");
  }
}

export const robot = new Robot("my robot");
const robot2 = new Robot();
const robot3 = new Robot();
const flyingRobot = new FlyingRobot("my flying robot", 4);

robot.sayHi();
robot2.sayHi();
robot3.sayHi();
flyingRobot.fly();
