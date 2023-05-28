export function Sounds({
  buttonForestSound,
  buttonRainSound,
  buttonCoffeeshopSound,
  buttonFireplaceSound
}) {
  const forest = new Audio("./assets/audio/Floresta.wav")
  const rain = new Audio("./assets/audio/Chuva.wav")
  const coffeeshop = new Audio("./assets/audio/Cafeteria.wav")
  const fireplace = new Audio("./assets/audio/Lareira.wav")
  
  forest.loop = true
  rain.loop = true
  coffeeshop.loop = true
  fireplace.loop = true

  function play(soundType) {
    switch(soundType) {
      case 'forest':
        forest.play()
        rain.pause()
        coffeeshop.pause()
        fireplace.pause()

        buttonForestSound.classList.add('selected')
        buttonRainSound.classList.remove('selected')
        buttonCoffeeshopSound.classList.remove('selected')
        buttonFireplaceSound.classList.remove('selected')
        break
      case 'rain':
        forest.pause()
        rain.play()
        coffeeshop.pause()
        fireplace.pause()

        buttonRainSound.classList.add('selected')
        buttonForestSound.classList.remove('selected')
        buttonCoffeeshopSound.classList.remove('selected')
        buttonFireplaceSound.classList.remove('selected')
        break
      case 'coffeeshop':
        forest.pause()
        rain.pause()
        coffeeshop.play()
        fireplace.pause()

        buttonCoffeeshopSound.classList.add('selected')
        buttonFireplaceSound.classList.remove('selected')
        buttonRainSound.classList.remove('selected')
        buttonForestSound.classList.remove('selected')
        break
      case 'fireplace':
        forest.pause()
        rain.pause()
        coffeeshop.pause()
        fireplace.play()

        buttonFireplaceSound.classList.add('selected')
        buttonForestSound.classList.remove('selected')
        buttonRainSound.classList.remove('selected')
        buttonCoffeeshopSound.classList.remove('selected')
        break
      default:
        break
    }
  }

  return {
    play
  }
}