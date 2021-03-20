const sceneEl = document.querySelector('a-scene');
const arSystem = sceneEl.systems['mindar-system'];

const exampleTarget = document.querySelector('#example-target');
const audioElement = document.querySelector('#audioele');

const playSound = () => {
  audioElement.components.sound.playSound();
};

const pauseSound = () => {
  audioElement.components.sound.pauseSound();
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
