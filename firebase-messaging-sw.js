importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyADDoSv7Wt8WOfYkcAYZcQOZtCKROuHMu4",
  authDomain: "dobhaichaapwale1.firebaseapp.com",
  projectId: "dobhaichaapwale1",
  storageBucket: "dobhaichaapwale1.firebasestorage.app",
  messagingSenderId: "141034963645",
  appId: "1:141034963645:web:442a93b6e87643b3bf2dd4"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = '🔔 New Order!';
  const notificationOptions = {
    body: 'Open Admin Panel to accept.',
    icon: 'https://cdn-icons-png.flaticon.com/512/747/747376.png', // Standard food icon
    vibrate: [200, 100, 200],
    data: { url: '/pf.html' } // Click to open admin
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
