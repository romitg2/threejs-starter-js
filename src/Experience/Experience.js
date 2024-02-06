import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Camera from "./Utils/Camera.js";
console.log("Sizes", Sizes);

let instance = null;

export default class Experience {
  constructor(canvas) {
    if (instance !== null) {
      return instance;
    }
    instance = this;

    this.sizes = new Sizes();
    this.sizes.on("resize", () => {
      console.log("resize");
    });

    this.time = new Time();
    this.time.on("tick", () => {
      console.log("tick");
    });

    this.camera = new Camera();

    this.canvas = canvas;
    console.log("Experience", this.canvas);
  }

  reisze() {
    console.log("reisze");
  }
}
