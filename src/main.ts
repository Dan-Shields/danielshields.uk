import { createApp } from 'vue';

import App from './App.vue';
import './index.css';

function is_touch_enabled() { 
  return ( 'ontouchstart' in window ) ||  
         ( navigator.maxTouchPoints > 0 ) ||  
         ( navigator.msMaxTouchPoints > 0 ); 
}

declare global {
	interface Window { isTouchEnabled: boolean; }
}

window.isTouchEnabled = is_touch_enabled();

const app = createApp(App);
app.mount('#app');