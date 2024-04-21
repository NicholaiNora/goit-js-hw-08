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
player.setCurrentTime(currentTime.seconds);