const SPEED = 0.02

export default class paddle {
constructor(paddElem) {
    this.paddleElem = paddElem
    this.reset()
}
get position() {
    return parseFloat(
      getComputedStyle(this.paddleElem).getPropertyValue("--position")
    )
  }

  set position(value) {
    this.paddleElem.style.setProperty("--position", value)
  }
  update(delta, ballheight) {
    this.position += SPEED * delta * (ballheight - this.position)
  }
  reset() {
 this.position = 50
  }
  rect() {
     return this.paddleElem.getBoundingClientRect()
  }
}