const clock = document.getElementById('clock');
setInterval(() => {
    clock.textContent = new Date().toLocaleTimeString();
}, 1000);