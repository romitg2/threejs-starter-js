import Sizes from "./Utils/Sizes.js";
console.log("Sizes", Sizes);

export default class Experience {
  constructor(canvas) {
    this.sizes = new Sizes();
    this.canvas = canvas;
    console.log("Experience", this.canvas);
  }
}
