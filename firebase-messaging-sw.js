self.addEventListener("push", event => {
  const data = event.data.json();

  event.waitUntil(
    self.registration.showNotification(
      data.notification?.title || "🛎️ New Order",
      {
        body: data.notification?.body || "New order received",
        icon: "/logo.png",
        vibrate: [300, 200, 300, 200, 400],
        requireInteraction: true
      }
    )
  );
});
