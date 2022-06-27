// Start Setting Box
let setting = document.querySelector(".setting-box");

let spin = document.querySelector(".toggle .icon");
spin.onclick = function () {
    this.classList.toggle("fa-spin");
    setting.classList.toggle("open");
};

// Add Color On Root
let colors = document.querySelectorAll(".colors li");
colors.forEach((li) => {
li.addEventListener("click", (e) => {
    colors.forEach((li) => {
    li.classList.remove("active");
    });
    e.target.classList.add("active");
    document.documentElement.style.setProperty("--main-color", e.target.dataset.color);
    localStorage.setItem("color-option", e.target.dataset.color);
});
});
// End

let randomBack = document.querySelectorAll(".random-backgrounds span");

randomBack.forEach(span => {
span.addEventListener("click", (e) => {
    randomBack.forEach(span => {
    span.classList.remove("active");
    });
    e.target.classList.add("active");

    if (span.dataset.background === "yes") {

    backgroundOption = true;

    randomizeImgs();

    localStorage.setItem("background-option", "true");

    } else {

    backgroundOption = false;

    clearInterval(handler);

    localStorage.setItem("background-option", "false");

    }
});
});

// End Setting Box

let backgroundOption = true;
let handler;

// Start Landing Page
let landingPage = document.querySelector(".landing-page");

let imgsArray = ["01.webp", "02.jpg", "03.jpg", "04.webp", "05.webp", "06.jpeg", "07.jpg", "08.jpg", "09.jpg", "010.jpg"];

function randomizeImgs() {
if (backgroundOption === true) {
    handler = setInterval(() => {
        let randomNum = Math.floor(Math.random() * imgsArray.length);
        landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[randomNum] + '")';
    }, 3000);
}
}
randomizeImgs();

// End Landing Page


// Start Local Storage

let mainColor = localStorage.getItem("color-option");
// Start Add color in local storage
if (mainColor !== null) {
    document.documentElement.style.setProperty("--main-color", localStorage.getItem("color-option"));

    colors.forEach((li) => {
        li.classList.remove("active");

    if (li.dataset.color === mainColor) {
        li.classList.add("active");
    }
    });
}
// End Add color

let mainBackground = localStorage.getItem("background-option");
// Start Add Background option in Local Storage
if (mainBackground !== null) {

    randomBack.forEach(span => {
        span.classList.remove("active");
    });    

    if (mainBackground === "true") {

        backgroundOption = true;
        randomizeImgs();
        document.querySelector(".random-backgrounds .yes").classList.add("active");
        
    } else {

        backgroundOption = false;
        clearInterval(handler);
        document.querySelector(".random-backgrounds .no").classList.add("active");
    }

}
// End Add background option Local Storage

// End Local Storage

// Start Skills
let skills = document.querySelector(".skills");
let spans = document.querySelectorAll(".skill-progress span")

window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop-100) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
}
// End Skills

// Start Gallery

// ADD popup images
let galleryImgs = document.querySelectorAll(".imgs-box img");

galleryImgs.forEach ((img) => {
    img.addEventListener("click" , (e) => {
        let overlay = document.createElement("div");
        overlay.className = "popup-overlay";
        document.body.appendChild(overlay);

        let overlayBox = document.createElement("div");
        overlayBox.className = "popup-box";

        // Add Alternate && Button To Image
        if (img.alt !== null) {
            let imgHeading = document.createElement("h3");
            imgHeading.className = "img-heading";
            let imgHeadingText = document.createTextNode(img.alt);
            imgHeading.appendChild(imgHeadingText);
            overlayBox.appendChild(imgHeading);

            let imgCloseButton = document.createElement("span");
            imgCloseButton.className = "imgClose-button";
            let imgCloseButtonText = document.createTextNode("X");
            imgCloseButton.appendChild(imgCloseButtonText);
            
            overlayBox.appendChild(imgCloseButton);
        }
        // finish Alternate && Button To Image

        let overlayimage = document.createElement("img");
        overlayimage.src = img.src;

        overlayBox.appendChild(overlayimage);
        
        document.body.appendChild(overlayBox);
    })
})
// finish popup images

document.addEventListener("click", (e) => {
    if (e.target.className == "imgClose-button") {
        e.target.parentElement.remove();

        document.querySelector(".popup-overlay").remove();
    }
}); 

// End Gallery

// Start Add Bullets and scroll to sections
// let allBullets = document.querySelectorAll(".nav-bullets .bullet");

// allBullets.forEach(bullet => {
//     bullet.addEventListener("click", (e) => {
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: "smooth"
//         })
//         });
//     });
// End Add Bullets and scroll to sections

// Start Add links and Scroll to sections
// let allLinks = document.querySelectorAll(".links a");

// allLinks.forEach((link) => {
//     link.addEventListener("click", (e) => {
//         e.preventDefault();
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: "smooth"
//         });
//     });
// });
// End Add links and Scroll to sections



// Start Add (Bullets && Links) and scroll to sections
let allLinks = document.querySelectorAll(".links a");
let allBullets = document.querySelectorAll(".nav-bullets .bullet");

function scrolling (element) {
    element.forEach((ele) => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}

// Use name convetion to function Add Links scroll Sections
scrolling(allLinks);

// Use name convetion to function Add Bullets scroll sections
scrolling(allBullets);

// End Add (Bullets && Links) and scroll to sections


// Start Show and Hide Bullets
let sectionBullets = document.querySelector(".nav-bullets");
let bulletsSpan = document.querySelectorAll(".option-bullets span");

bulletsSpan.forEach(span => {
    span.addEventListener("click" , (e) => {
        bulletsSpan.forEach(span => {
            span.classList.remove("active");
        });
        e.target.classList.add("active");

        if (span.dataset.display === "show") {
            sectionBullets.style.display = "block";

            localStorage.setItem("bullets-option", "block");

        } else { 
            sectionBullets.style.display = "none";

            localStorage.setItem("bullets-option", "none");
        }
    });
});
// End Show and Hide Bullets

let mainBullets = localStorage.getItem("bullets-option");
// Start Add Bullets option in local storage
if (mainBullets !== null) {

    bulletsSpan.forEach(span => {
        span.classList.remove("active");
    });

    if (mainBullets === "block"){

        sectionBullets.style.display = "block";
        document.querySelector(".option-bullets .yes").classList.add("active");

    } else {

        sectionBullets.style.display = "none";
        document.querySelector(".option-bullets .no").classList.add("active");
    }
}
// End Add Bullets option in local storage

// Start Add button Reset Options
let resetOptions = document.querySelector(".reset-options");

resetOptions.onclick = function () {

    window.location.reload();
    localStorage.clear();
}
// End Add button Reset Options

// Start Add links in bar to page
let bar = document.querySelector(".header-area .bar");
let links = document.querySelector(".header-area .links")

bar.onclick = function(e) {
    bar.classList.toggle("active");
    e.stopPropagation();

    links.classList.toggle("open");
}

links.onclick = function(e) {
    e.stopPropagation();
}

document.addEventListener("click" , (e) => {
    if (e.target !== bar && e.target !== links) {

        if (links.classList.contains("open")) {

            bar.classList.toggle("active");

            links.classList.toggle("open");
    
        }
    }
})

// End Add links in bar to page