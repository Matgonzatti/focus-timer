export function Timer({
  minutesDisplay,
  secondsDisplay
}) {
  let timeoutid

  function countdown() {
    timeoutid = setTimeout(() => {
      if (secondsDisplay.textContent == "00" && minutesDisplay.textContent == "00") {
        return
      }

      if (secondsDisplay.textContent == "00") {
        secondsDisplay.textContent = "59";
        handleTimer(1, 1, true)
      } else {
        handleTimer(0, 1, true)
      }

      countdown()
    }, 1000);
  }

  function handleTimer(minutes, seconds, decrease) {
    let newMinutes = (Number(minutesDisplay.textContent) + (!decrease ? minutes : minutes * -1)) 
    let newSeconds = (Number(secondsDisplay.textContent) + (!decrease ? seconds : seconds * -1)) 

    if (newMinutes >= 0) {
      minutesDisplay.textContent = newMinutes.toString().padStart(2, "0");
      secondsDisplay.textContent = newSeconds.toString().padStart(2, "0");
    }
  }

  function plus() {
    handleTimer(5, 0, false)
  }

  function minus() {
    handleTimer(5, 0, true)
  }

  function play() {
    countdown()
  }

  function stop() {
    clearTimeout(timeoutid)
  }

  return {
    countdown,
    plus,
    minus,
    play,
    stop
  }
}