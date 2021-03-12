let vidElement = null;

const showPortfolio = (done) => {
  const portfolio = document.querySelector('#portfolio-panel');
  const playButton = document.querySelector('#play-button');
  const previewImg = document.querySelector('#preview-image');

  playButton.setAttribute('visible', true);
  portfolio.setAttribute('visible', true);
};

const hidePortfolio = () => {
  const portfolio = document.querySelector('#portfolio-panel');
  const playButton = document.querySelector('#play-button');

  portfolio.setAttribute('visible', false);
  document.querySelector('#paintandquest-video-mp4').pause();
  document.querySelector('#paintandquest-video-webm').pause();
};

const playPause = () => {
  const playButton = document.querySelector('#play-button');
  document.querySelector('#preview-image').setAttribute('visible', false);

  const testVideo = document.createElement('video');
  const canplayWebm = testVideo.canPlayType('video/webm; codecs="vp8, vorbis"');

  if (canplayWebm == '') {
    document
      .querySelector('#paintandquest-video-link')
      .setAttribute('src', '#paintandquest-video-mp4');
    vidElement = document.querySelector('#paintandquest-video-mp4');
  } else {
    document
      .querySelector('#paintandquest-video-link')
      .setAttribute('src', '#paintandquest-video-webm');
    vidElement = document.querySelector('#paintandquest-video-webm');
  }

  if (vidElement.currentTime === 0) {
    playButton.setAttribute('visible', false);
    vidElement.play();
  } else if (vidElement.paused) {
    playButton.setAttribute('visible', false);
    vidElement.play();
  } else {
    vidElement.pause();
    playButton.setAttribute('visible', true);
  }
};

AFRAME.registerComponent('mytarget', {
  init: function () {
    this.el.addEventListener('targetFound', (event) => {
      // console.log("target found");
      showPortfolio();
    });
    this.el.addEventListener('targetLost', (event) => {
      // console.log("target lost");
      hidePortfolio();
    });
    this.el.addEventListener('click', (event) => {
      // console.log("target clicked");
      playPause();
    });
  },
});

document.addEventListener('DOMContentLoaded', function () {
  const sceneEl = document.querySelector('a-scene');
  const arSystem = sceneEl.systems['mindar-system'];
  const compatibilityOverlay = document.querySelector(
    '#example-compatibility-overlay'
  );
  const loadingOverlay = document.querySelector('#example-loading-overlay');

  loadingOverlay.style.display = 'block';
  sceneEl.addEventListener('arReady', (event) => {
    loadingOverlay.style.display = 'none';
  });

  sceneEl.addEventListener('arError', (event) => {
    loadingOverlay.style.display = 'none';
    compatibilityOverlay.style.display = 'block';
  });
});
