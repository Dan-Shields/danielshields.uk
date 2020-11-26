import { createApp } from 'vue';

import App from './App.vue';
import './index.css';

import mitt from 'mitt';
const emitter = mitt();

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
app.config.globalProperties.emitter = emitter;
app.mount('#app');