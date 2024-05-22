import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);






player.on('play', function() {
  player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
})
});

player.on('pause', throttle(function() {
  player.getCurrentTime().then(function(seconds) {
    localStorage.setItem("videoplayer-current-time", seconds);
})
}, 1000));




