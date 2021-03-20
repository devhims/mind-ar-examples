const sceneEl = document.querySelector('a-scene');
const arSystem = sceneEl.systems['mindar-system'];

const exampleTarget = document.querySelector('#example-target');
const audioElement = document.querySelector('#maggisound');

const playSound = () => {
  // exampleTarget.components.sound.playSound();
  audioElement.play();
};

const pauseSound = () => {
  // exampleTarget.components.sound.pauseSound();
  audioElement.pause();
};

// detect target found
exampleTarget.addEventListener('targetFound', (event) => {
  console.log('target found');
  playSound();
});

// detect target lost
exampleTarget.addEventListener('targetLost', (event) => {
  console.log('target lost');
  pauseSound();
});
