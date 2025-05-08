gsap.from("h1", { duration: 1, y: 50, opacity: 0, ease: "power2.out" });
gsap.from("p", { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: "power2.out" });
gsap.from("#about", {
    scrollTrigger: "#about",
    duration: 1,
    opacity: 0,
    y: 100
});
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { enable: true, speed: 2 }
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});