// Конфиг Firebase для Birga (проект fpver2)
const firebaseConfig = {
  apiKey: "AIzaSyCkijpqxXDtHpiTY4F9w-Pb_GiIs3I9d2g",
  authDomain: "fpver2.firebaseapp.com",
  projectId: "fpver2",
  storageBucket: "fpver2.firebasestorage.app",
  messagingSenderId: "851262074869",
  appId: "1:851262074869:web:772d28ff452f0e3567fabc",
};
// Адрес ИИ-прокси (Cloudflare Worker из ai-worker.js). Пусто = встроенный базовый режим.
const BIRGA_AI_URL = "";
window.FB = {};
if (firebaseConfig.apiKey !== "YOUR_API_KEY" && window.firebase) {
  firebase.initializeApp(firebaseConfig);
  FB.auth = firebase.auth();
  FB.db = firebase.firestore();
  FB.db.enablePersistence({ synchronizeTabs: true }).catch(() => {});
}
