import Experience from "../Experience";

export default class Camera {
  constructor() {
    this.experience = new Experience();

    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    console.log("Camera constructor");
    this.instance = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    this.instance.position.z = 5;
  }
}
