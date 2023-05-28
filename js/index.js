import { Timer } from './timer.js'
import { Sounds } from './sounds.js'
import { buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonForestSound,
  buttonRainSound,
  buttonCoffeeshopSound,
  buttonFireplaceSound,
  minutesDisplay,
  secondsDisplay } from './elements.js'


const timer = new Timer({
  minutesDisplay, 
  secondsDisplay
})

const sounds = new Sounds({
  buttonForestSound,
  buttonRainSound,
  buttonCoffeeshopSound,
  buttonFireplaceSound,
})

buttonPlay.addEventListener('click', () => {
  timer.play()
})

buttonStop.addEventListener('click', () => {
  timer.stop()
})

buttonPlus.addEventListener('click', () => {
  timer.plus()
})

buttonMinus.addEventListener('click', () => {
  timer.minus()
})

buttonForestSound.addEventListener('click', () => {
  sounds.play('forest')
})

buttonCoffeeshopSound.addEventListener('click', () => {
  sounds.play('coffeeshop')
})

buttonRainSound.addEventListener('click', () => {
  sounds.play('rain')
})

buttonFireplaceSound.addEventListener('click', () => {
  sounds.play('fireplace')
})
