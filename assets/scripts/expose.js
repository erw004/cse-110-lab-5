// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  console.log("========================================================");

  const hornSelect = document.getElementById('horn-select');
  const changeVolume = document.getElementById('volume');
  const playSound = document.querySelector('button');

  const hornImage = document.querySelector('img');
  const hornAudio = document.querySelector('audio');

  const volumeIcon = document.querySelector("#volume-controls img");

  // select horn
  hornSelect.addEventListener('change', function() {
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
    const hornType = hornSelect.value;
    hornImage.src = `assets/images/${hornType}.svg`;
    hornAudio.src = `assets/audio/${hornType}.mp3`;
  })

  // volume
  changeVolume.addEventListener('input', function() {
    const volume = Number(changeVolume.value);
    console.log(volume);

    if (volume === 0) {
      volumeIcon.src = `assets/icons/volume-level-0.svg`;
    } else if (volume < 33) {
      volumeIcon.src = `assets/icons/volume-level-1.svg`;
    } else if (volume < 67) {
      volumeIcon.src = `assets/icons/volume-level-2.svg`;
    } else {
      volumeIcon.src = `assets/icons/volume-level-3.svg`;
    }

    hornAudio.volume = volume / 100;
  })

  // play sound
  playSound.addEventListener('click', function() {
    hornAudio.play();

    if (hornSelect.value == 'party-horn') {
      const confetti = new JSConfetti();
      confetti.addConfetti();
    }
  })
}