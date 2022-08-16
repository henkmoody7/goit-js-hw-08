import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

// function countTime(e) {
//   const videoTime = e.seconds;
//   console.log(videoTime);
//   return videoTime;
// }

// player.on('timeupdate', countTime);

// player
//   .setCurrentTime()
//   .then(function (seconds) {
//     // seconds = the actual time that the player seeked to
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
