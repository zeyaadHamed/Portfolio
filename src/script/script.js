let li = document.querySelectorAll("li");
let links = document.querySelector('.links');
let btn = document.querySelector(".bars");

li.forEach((link) => {
    link.addEventListener('click', () => {
        li.forEach((el) => el.classList.remove('active'));
        link.classList.add('active');
        
        if (window.innerWidth <= 979) {
            links.style.display = "none";
        }
    });
});

btn.addEventListener("click", () => {
    if (window.innerWidth <= 979) {
        if (links.style.display === "none" || links.style.display === "") {
            links.style.display = "flex";
        } else {
            links.style.display = "none";
        }
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 979) {
        links.style.display = "flex";
    } else {
        links.style.display = "none";
    }
});

const typedTextSpan = document.querySelector("#typing-text");
const cursorSpan = document.createElement("span");
cursorSpan.classList.add("cursor");

const textArray = ["Ziad Hamed", "FrontEnd"];
const typingDelay = 150;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

const skillSpans = document.querySelectorAll('.skills-list li span');
let activePercentage = null;

skillSpans.forEach(span => {
    span.addEventListener('click', () => {
        if (activePercentage) {
            activePercentage.style.display = 'none';
        }
        const percentage = span.nextElementSibling.nextElementSibling;
        percentage.style.display = 'flex';
        activePercentage = percentage;
    });
});


document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const namePattern = /^[a-zA-Z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // التحقق من الأسماء
    if (!namePattern.test(firstname) || !namePattern.test(lastname)) {
        alert("Please enter valid names (letters only).");
        return;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message.trim() === "") {
        alert("Message field cannot be empty.");
        return;
    }

    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            alert("Your message has been sent successfully!");

            // تفريغ النموذج بعد الإرسال الناجح
            document.getElementById("contactForm").reset();
        } else {
            alert("There was an error sending your message. Please try again later.");
        }
    }).catch(error => {
        alert("There was an error sending your message. Please try again later.");
    });
});

// Copy Right Year Dinamic

let year = document.getElementById('year');
let copy = document.querySelector('copyright');
let years = new Date

let yearCopy = years.getFullYear();
year.append(yearCopy);

