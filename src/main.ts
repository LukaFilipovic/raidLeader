/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxFphpFvMR-AKALcV1r0QXT4RCFHhNv1Q",
  authDomain: "raidleader-c6336.firebaseapp.com",
  projectId: "raidleader-c6336",
  storageBucket: "raidleader-c6336.appspot.com",
  messagingSenderId: "556782443839",
  appId: "1:556782443839:web:6b26062423f791903dc78a",
  measurementId: "G-ZKK3W244VC"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
