/* ----------------------------------------------- Sticky Header ----------------------------------------------- */
window.addEventListener('scroll', function() {
    var main = document.querySelector('#main-menu');
    var mobile = document.querySelector('#mobile-menu');
    main.classList.toggle('sticky', window.scrollY > 0);
    mobile.classList.toggle('sticky', window.scrollY > 0);

    if (Array.from(main.classList).includes('sticky')) {
        document.querySelector('#main-menu div img').src = 'assets/Dash Logo Colours-purple.svg';
    } else {
        document.querySelector('#main-menu div img').src = 'assets/Dash Logo Colours-White.svg';
    }
});
/* ----------------------------------------------- Mobile Menu ----------------------------------------------- */
function toggleMobileMenu() {
    let hamburger = document.getElementById('hamburger')
    hamburger.classList.toggle('open')
}
document.getElementById('hamburger').addEventListener('click', toggleMobileMenu)
    /* ----------------------------------------------- Main Menu Current Page ----------------------------------------------- */
function activePage() {
    let currentPage = window.location.href;
    let menuLinks = document.querySelectorAll('#main-menu li a')
    menuLinks.forEach(element => {

        console.log(currentPage)

        element.classList.remove('active')
        if (element.href === currentPage) {
            element.classList.add('active')
        }
    })

}
activePage()
    /* ----------------------------------------------- Dark Mode ----------------------------------------------- */
function darkMode() {
    let isChecked = document.querySelector('.switch input').checked
    let elements = document.querySelectorAll('.day')
    if (isChecked) {
        elements.forEach(element => {
            element.classList.add('night')
        })
    } else {
        elements.forEach(element => {
            element.classList.remove('night')
        })
    }
}
document.querySelector('.switch').addEventListener('click', darkMode);
/* ----------------------------------------------- Slider ----------------------------------------------- */
function moveSlider() {
    let dots = document.querySelectorAll('.slider-dot-control')
    dots.forEach(element => {
        element.classList.remove('active')
    })
    event.target.classList.add('active')
    let slides = document.querySelectorAll('.slides')
    slides.forEach(element => {
        element.classList.remove('active')
    })
    slides[Array.from(dots).indexOf(event.target)].classList.add('active')
}

function addSliderDots() {
    let dotCount = document.querySelectorAll('.testimonial')
    let dotContainer = document.querySelector('.slider-dots')
    for (i = 0; i < dotCount.length; i++) {
        const el = document.createElement('span')
        el.classList.add('slider-dot-control')
        dotContainer.appendChild(el)
    }
    let dots = document.querySelectorAll('.slider-dot-control')
    dots[0].classList.add('active')
    dots.forEach(element => {
        element.addEventListener('click', moveSlider)
    })
}


addSliderDots()
    /* ----------------------------------------------- Web App Toggle ----------------------------------------------- */
function changeActiveWebApp() {
    let toggles = document.querySelectorAll('.webApp-toggle')
    toggles.forEach(element => {
        element.classList.remove('active')
    })
    event.target.closest('.webApp-toggle').classList.add('active')
    let arr = Array.from(toggles)
    let appIndex = arr.indexOf(event.target.closest('.webApp-toggle'))

    let image = document.querySelectorAll('.webApp-content')
    image.forEach(element => {
        element.classList.remove('active')
    })
    image[appIndex].classList.add('active')

}

function webAppToggle() {
    let toggles = document.querySelectorAll('.webApp-toggle')
    toggles.forEach(element => {
        element.addEventListener('click', changeActiveWebApp)
    })
}
webAppToggle()

/* ----------------------------------------------- Mouse Typing ----------------------------------------------- */
async function typeSentence(sentence, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        document.getElementById('sentence').append(letters[i]);
        i++
    }
    return;
}


function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function deleteSentence() {
    const sentence = document.getElementById('sentence').innerHTML
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
        await waitForMs(100);
        letters.pop();
        document.getElementById('sentence').innerHTML = (letters.join(""));
    }
}
const carouselText = [
    { text: "Front End Developer", color: "red" },
    { text: "Web Designer", color: "orange" },
    { text: "Logo Designer", color: "yellow" }
]

async function carousel(carouselList) {
    var i = 0;
    while (true) {
        // updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text);
        await waitForMs(1500);
        await deleteSentence(carouselText);
        await waitForMs(500);
        i++
        if (i >= carouselList.length) { i = 0; }
    }
}

// function updateFontColor(color) {
//     document.getElementById('sentence').css('color', color);
// }
carousel(carouselText)

/* ----------------------------------------------- Particles ----------------------------------------------- */
// var canvas = document.getElementById("canvas"),
//     ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var stars = [], // Array that contains the stars
//     FPS = 120, // Frames per second
//     x = 100, // Number of stars
//     mouse = {
//         x: 0,
//         y: 0
//     }; // mouse location

// // Push stars to array

// for (var i = 0; i < x; i++) {
//     stars.push({
//         x: Math.random() * canvas.width,
//         y: Math.random() * canvas.height,
//         radius: Math.random() * 1 + 1,
//         vx: Math.floor(Math.random() * 50) - 25,
//         vy: Math.floor(Math.random() * 50) - 25
//     });
// }

// // Draw the scene

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.globalCompositeOperation = "lighter";

//     for (var i = 0, x = stars.length; i < x; i++) {
//         var s = stars[i];

//         ctx.fillStyle = "#fff";
//         ctx.beginPath();
//         ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
//         ctx.fill();
//         ctx.fillStyle = 'black';
//         ctx.stroke();
//     }

//     ctx.beginPath();
//     for (var i = 0, x = stars.length; i < x; i++) {
//         var starI = stars[i];
//         ctx.moveTo(starI.x, starI.y);
//         if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
//         for (var j = 0, x = stars.length; j < x; j++) {
//             var starII = stars[j];
//             if (distance(starI, starII) < 150) {
//                 //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
//                 ctx.lineTo(starII.x, starII.y);
//             }
//         }
//     }
//     ctx.lineWidth = 0.05;
//     ctx.strokeStyle = 'white';
//     ctx.stroke();
// }

// function distance(point1, point2) {
//     var xs = 0;
//     var ys = 0;

//     xs = point2.x - point1.x;
//     xs = xs * xs;

//     ys = point2.y - point1.y;
//     ys = ys * ys;

//     return Math.sqrt(xs + ys);
// }

// // Update star locations

// function update() {
//     for (var i = 0, x = stars.length; i < x; i++) {
//         var s = stars[i];

//         s.x += s.vx / FPS;
//         s.y += s.vy / FPS;

//         if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
//         if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
//     }
// }

// canvas.addEventListener('mousemove', function(e) {
//     mouse.x = e.clientX;
//     mouse.y = e.clientY;
// });

// // Update and draw

// function tick() {
//     draw();
//     update();
//     requestAnimationFrame(tick);
// }

// tick();