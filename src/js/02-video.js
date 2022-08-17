import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const storageTime = localStorage.getItem('videoplayer-current-time');

player.on('timeupdate', countTime);

function countTime(e) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(e.seconds));
}

if (localStorage.getItem('videoplayer-current-time')) {
  player
    .setCurrentTime(storageTime)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}
