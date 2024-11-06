function openWhatsApp() {
    const message = encodeURIComponent("Hi Richegoo! Any Available Website For Me to Start My Affiliate Marketing Business?");
    const whatsappNumber = 'https://wa.me/+6282210081028?text=' + message; // Replace 1234567890 with your actual WhatsApp number
    window.open(whatsappNumber, '_blank');
}


// JavaScript for Scroll Animations
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".animate_on_scroll");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("intro-animation");
                entry.target.classList.remove("outro-animation");
            } else {
                entry.target.classList.remove("intro-animation");
                entry.target.classList.add("outro-animation");
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});

