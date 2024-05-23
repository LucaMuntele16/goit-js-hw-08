import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const localStorageKey = "videoplayer-current-time";

const saveCurrentTime = throttle((currentTime) =>{
  localStorage.setItem(localStorageKey,currentTime);
}, 1000);


player.on('timeupdate', (event) => {
  saveCurrentTime(event.seconds);
})

document.addEventListener('DOMContentLoaded', () => {
  const savedTime = localStorage.getItem(localStorageKey);
  if (savedTime) {
    player.setCurrentTime(savedTime).catch((error) => {
      console.error('Error setting current time:', error);
    });
  }
});








