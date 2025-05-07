// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectVoice = document.getElementById("voice-select");
  const talkButton = document.querySelector("button");
  const textToSpeak = document.getElementById("text-to-speak");

  const smilingFace = document.querySelector("img");

  const synth = window.speechSynthesis;

  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    selectVoice.innerHTML = '';

    voices.forEach((voice, i) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = i;
      selectVoice.appendChild(option);
    });
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  talkButton.addEventListener('click', function() {
    const utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    utterance.voice = voices[selectVoice.value];

    smilingFace.src = 'assets/images/smiling-open.png';
    utterance.onend = () => {
      smilingFace.src = 'assets/images/smiling.png';
    };
    synth.speak(utterance);
  })
}