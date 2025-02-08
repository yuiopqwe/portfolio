document.addEventListener("DOMContentLoaded", function () {
    // 폼 제출 시 알림
    document.querySelector("#contact-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("메시지가 전송되었습니다!");
    });

    // 부드러운 스크롤 효과
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Intersection Observer API로 fade-in 효과 적용
    const fadeInElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.3 // 30%가 보일 때 효과 적용
    });

    fadeInElements.forEach(element => {
        observer.observe(element);
    });
});
