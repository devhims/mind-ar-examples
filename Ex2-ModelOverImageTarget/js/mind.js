document.addEventListener('DOMContentLoaded', function () {
  const sceneEl = document.querySelector('a-scene');
  const arSystem = sceneEl.systems['mindar-system'];

  sceneEl.addEventListener('arReady', (event) => {
    arSystem.start();
  });
});
