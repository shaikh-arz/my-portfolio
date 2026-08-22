/* =========================================
   MOHD ARIZ PORTFOLIO
   CLEAN JAVASCRIPT
========================================= */


/* =========================================
   CUSTOM CURSOR
========================================= */

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursorDot) {
        cursorDot.style.left = mouseX + "px";
        cursorDot.style.top = mouseY + "px";
    }

});


function cursorAnimation() {

    outlineX += (mouseX - outlineX) * 0.12;
    outlineY += (mouseY - outlineY) * 0.12;

    if (cursorOutline) {
        cursorOutline.style.left = outlineX + "px";
        cursorOutline.style.top = outlineY + "px";
    }

    requestAnimationFrame(cursorAnimation);
}

cursorAnimation();


/* =========================================
   CURSOR HOVER
========================================= */

document
    .querySelectorAll("a, button, .project-card, .skill-card, .image-card")
    .forEach((element) => {

        element.addEventListener("mouseenter", () => {

            cursorOutline?.classList.add("hover");

        });

        element.addEventListener("mouseleave", () => {

            cursorOutline?.classList.remove("hover");

        });

    });


/* =========================================
   SCROLL REVEAL
   RUNS EVERY TIME
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                } else {

                    entry.target.classList.remove("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   HEADING ANIMATION
========================================= */

const headings =
    document.querySelectorAll(
        ".section-heading h2, .hero h2"
    );


headings.forEach((heading) => {

    const text = heading.textContent;

    heading.innerHTML = "";

    [...text].forEach((letter, index) => {

        const span =
            document.createElement("span");

        span.className = "char";

        span.style.setProperty(
            "--delay",
            `${index * 0.035}s`
        );

        span.textContent =
            letter === " "
                ? "\u00A0"
                : letter;

        heading.appendChild(span);

    });

});


/* =========================================
   HEADING OBSERVER
========================================= */

const headingObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "text-visible"
                    );

                } else {

                    entry.target.classList.remove(
                        "text-visible"
                    );

                }

            });

        },

        {
            threshold: 0.2
        }

    );


headings.forEach((heading) => {

    headingObserver.observe(heading);

});


/* =========================================
   HERO NAME ANIMATION
========================================= */

const nameElement =
    document.querySelector(".gradient-text");


if (nameElement) {

    const name =
        nameElement.textContent.trim();

    nameElement.innerHTML = "";

    [...name].forEach((letter, index) => {

        const span =
            document.createElement("span");

        span.className = "name-char";

        span.style.setProperty(
            "--name-delay",
            `${index * 0.06}s`
        );

        span.textContent =
            letter === " "
                ? "\u00A0"
                : letter;

        nameElement.appendChild(span);

    });

}


/* =========================================
   HERO NAME OBSERVER
========================================= */

if (nameElement) {

    const nameObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        nameElement.classList.add(
                            "name-visible"
                        );

                    } else {

                        nameElement.classList.remove(
                            "name-visible"
                        );

                    }

                });

            },

            {
                threshold: 0.3
            }

        );

    nameObserver.observe(nameElement);

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


function updateNavigation() {

    let current = "";

    sections.forEach((section) => {

        const top =
            section.offsetTop - 300;

        const bottom =
            top + section.offsetHeight;

        if (
            window.scrollY >= top &&
            window.scrollY < bottom
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateNavigation
);

updateNavigation();


/* =========================================
   SMOOTH SCROLL
========================================= */

document
    .querySelectorAll('.nav-link, .btn[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", (e) => {

            const id =
                link.getAttribute("href");

            const target =
                document.querySelector(id);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        });

    });


/* =========================================
   PROJECT 3D TILT
========================================= */

document
    .querySelectorAll(".project-card")
    .forEach((card) => {

        card.addEventListener(
            "mousemove",
            (e) => {

                if (window.innerWidth < 900)
                    return;

                const rect =
                    card.getBoundingClientRect();

                const x =
                    e.clientX - rect.left;

                const y =
                    e.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) / centerY) * -4;

                const rotateY =
                    ((x - centerX) / centerX) * 4;

                card.style.transform =
                    `perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "translateY(0)";

            }
        );

    });


/* =========================================
   PROFILE IMAGE
========================================= */

const heroImage =
    document.querySelector(".hero-image");

const imageCard =
    document.querySelector(".image-card");


if (heroImage && imageCard) {

    heroImage.addEventListener(
        "mousemove",
        (e) => {

            if (window.innerWidth < 900)
                return;

            const rect =
                heroImage.getBoundingClientRect();

            const x =
                e.clientX - rect.left;

            const y =
                e.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -4;

            const rotateY =
                ((x - centerX) / centerX) * 4;

            imageCard.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 scale(1.02)`;

        }
    );


    heroImage.addEventListener(
        "mouseleave",
        () => {

            imageCard.style.transform =
                "rotate(3deg)";

        }
    );

}


/* =========================================
   MAGNETIC BUTTONS
========================================= */

document
    .querySelectorAll(".btn, .contact-email")
    .forEach((button) => {

        button.addEventListener(
            "mousemove",
            (e) => {

                const rect =
                    button.getBoundingClientRect();

                const x =
                    e.clientX -
                    rect.left -
                    rect.width / 2;

                const y =
                    e.clientY -
                    rect.top -
                    rect.height / 2;

                button.style.transform =
                    `translate(
                        ${x * 0.12}px,
                        ${y * 0.12}px
                    )`;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "translate(0, 0)";

            }
        );

    });


/* =========================================
   SCROLL PROGRESS
========================================= */

const progress =
    document.createElement("div");

progress.className =
    "scroll-progress";

document.body.appendChild(progress);


window.addEventListener(
    "scroll",
    () => {

        const total =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const current =
            window.scrollY;

        const percentage =
            total > 0
                ? (current / total) * 100
                : 0;

        progress.style.width =
            percentage + "%";

    }
);
/* =========================================
   MAGNETIC BUTTON - FINAL
========================================= */

const magneticButtons = document.querySelectorAll(
    ".btn, .social-links a, .contact-email"
);

magneticButtons.forEach((button) => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x =
            e.clientX - rect.left - rect.width / 2;

        const y =
            e.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.20}px, ${y * 0.20}px)`;

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translate(0, 0)";

    });

});