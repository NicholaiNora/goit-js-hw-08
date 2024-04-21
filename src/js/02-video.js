import Player from '@vimeo/player';
let throttle = require('lodash.throttle');
var _ = require('lodash');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  _.throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  }, 1000)
);
const JCurrentTime = localStorage.getItem('videoplayer-current-time') ?? "";
const currentTime = JSON.parse(JCurrentTime);
player
  .setCurrentTime(currentTime.seconds)
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