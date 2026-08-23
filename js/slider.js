document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".swiper-slide");
    const bullets = document.querySelectorAll(".swiper-pagination-bullet");

    if (!slides.length) return;

    let currentSlide = 0;
    let timer;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
                slide.style.opacity = "1";
            } else {
                slide.style.display = "none";
                slide.style.opacity = "0";
            }
        });

        bullets.forEach((bullet, i) => {
            bullet.classList.toggle(
                "swiper-pagination-bullet-active",
                i === index
            );
        });

        currentSlide = index;
    }

    function nextSlide() {
        let next = currentSlide + 1;

        if (next >= slides.length) {
            next = 0;
        }

        showSlide(next);
    }

    function startSlider() {
        timer = setInterval(nextSlide, 4000);
    }

    function stopSlider() {
        clearInterval(timer);
    }

    bullets.forEach((bullet, index) => {
        bullet.addEventListener("click", function () {
            stopSlider();
            showSlide(index);
            startSlider();
        });
    });

    showSlide(0);
    startSlider();
});
