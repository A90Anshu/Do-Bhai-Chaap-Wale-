importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "PASTE SAME API KEY FROM admin.html",
  authDomain: "PASTE SAME AUTH DOMAIN",
  projectId: "PASTE SAME PROJECT ID",
  messagingSenderId: "PASTE SAME SENDER ID",
  appId: "PASTE SAME APP ID"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification("🚨 NEW ORDER", {
    body: "Open admin panel",
    vibrate: [500, 500, 500, 500],
    requireInteraction: true
  });
});
