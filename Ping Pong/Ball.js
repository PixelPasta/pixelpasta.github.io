const INITIAL_VELOCITY = 0.025
const VELOCITY_INCREASE = 0.00001

export default class Ball {
    constructor(BallElm) {
        this.ballem = BallElm
        this.reset()
    }
    get x() {
        return parseFloat(getComputedStyle(this.ballem).getPropertyValue('--x'))
    }
    set x(value) {
        this.ballem.style.setProperty('--x', value)
    }
    get y() {
        return parseFloat(getComputedStyle(this.ballem).getPropertyValue('--y'))
    }
    set y(value) {
        this.ballem.style.setProperty('--y', value)
    }
    update(delta, paddlerects) {
     const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hue'))
     document.documentElement.style.setProperty('--hue', hue + delta * 0.02)
    this.x += this.direction.x * this.velocity * delta
    this.y += this.direction.y * this.velocity * delta
    this.velocity += VELOCITY_INCREASE * delta
    const rect = this.rect()
    if (rect.bottom >= window.innerHeight || rect.top <= 0) {
        this.direction.y *= -1
    }
    if (paddlerects.some(r => iscollision(r, rect))) {
    this.direction.x *= -1
    }
    }
    reset() {
        this.x = 50
        this.y = 50
     this.direction = { x: 0 }
        while (Math.abs(this.direction.x) <= .2 || Math.abs(this.direction.x) >= .9) {
            const heading = randomNumberBetween(0, 2 * Math.PI)
            this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
        }
        this.velocity = INITIAL_VELOCITY
    }
    rect() {
        return this.ballem.getBoundingClientRect()
    }
}

function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min
  }
  
function iscollision(rect1, rect2) {
  return rect1.left <= rect2.right && rect1.right >= rect2.left && rect1.top <= rect2.bottom && rect1.bottom >= rect2.top
}