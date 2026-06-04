// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Trigger once on load, then attach to scroll
window.addEventListener("scroll", reveal);
reveal();

// Video playback on hover
document.querySelectorAll(".project-box").forEach(box => {
    const video = box.querySelector("video");

    if (video) {
        box.addEventListener("mouseenter", () => {
            video.play().catch(e => console.log("Video auto-play prevented:", e));
        });

        box.addEventListener("mouseleave", () => {
            video.pause();
            video.currentTime = 0; // Reset video to start
        });
    }
});


// Live HUD Clock
function updateHUD() {
    const hudDate = document.getElementById('hudDate');
    const hudTime = document.getElementById('hudTime');

    if (!hudDate || !hudTime) return;

    const now = new Date();

    // Format Date: DD MMM YYYY
    const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    hudDate.textContent = now.toLocaleDateString('en-GB', dateOptions).toUpperCase();

    // Format Time: HH:MM:SS
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
    hudTime.textContent = now.toLocaleTimeString('en-GB', timeOptions);
}

// Update clock every second
setInterval(updateHUD, 1000);
updateHUD(); // Initial call

// Handle HUD Scroll Appearance
function handleHUDScroll() {
    const hud = document.querySelector('.global-hud');
    if (window.scrollY > 300) {
        hud.classList.add('scrolled');
    } else {
        hud.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', handleHUDScroll);
handleHUDScroll(); // Initial check

