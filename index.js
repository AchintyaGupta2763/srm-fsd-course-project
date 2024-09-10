// Toggle Menu for Navigation
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

// Form Validation for contact.html
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect input values
        const name = document.querySelector('input[type="text"]').value;
        const email = document.querySelector('input[type="email"]').value;
        const message = document.querySelector('textarea').value;

        // Simple validation checks
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Simulate form submission
        alert(`Thank you, ${name}! Your message has been received.`);

        // Clear the form
        contactForm.reset();
    });
}

// Form Validation for blog.html (Comment Form)
const commentForm = document.querySelector('.comment-form');

if (commentForm) {
    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect input values
        const name = document.querySelector('.comment-form input[type="text"]').value;
        const email = document.querySelector('.comment-form input[type="email"]').value;
        const comment = document.querySelector('.comment-form textarea').value;

        // Simple validation checks
        if (name === "" || email === "" || comment === "") {
            alert("Please fill out all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Simulate comment submission
        alert(`Thank you, ${name}! Your comment has been posted.`);

        // Clear the form
        commentForm.reset();
    });
}

// Form Validation for admission.html
const admissionForm = document.querySelector('.admission-form form');

if (admissionForm) {
    admissionForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Collect input values
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const dob = document.getElementById('dob').value;
        const course = document.getElementById('course').value;
        const message = document.getElementById('message').value;

        // Simple validation checks
        if (fullname === "" || email === "" || phone === "" || dob === "" || course === "") {
            alert("Please fill out all required fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Simulate form submission
        alert(`Thank you, ${fullname}! Your application has been received.`);

        // Clear the form
        admissionForm.reset();
    });
}

// Email validation function (common across forms)
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Smooth Scroll for internal links
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(scrollLink => {
    scrollLink.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll to Top Button
const scrollToTopButton = document.createElement("button");
scrollToTopButton.id = "scrollToTop";
scrollToTopButton.innerHTML = "↑";
scrollToTopButton.style.position = "fixed";
scrollToTopButton.style.bottom = "20px";
scrollToTopButton.style.right = "20px";
scrollToTopButton.style.display = "none";
scrollToTopButton.style.padding = "10px 15px";
scrollToTopButton.style.border = "none";
scrollToTopButton.style.borderRadius = "5px";
scrollToTopButton.style.backgroundColor = "#000";
scrollToTopButton.style.color = "#fff";
scrollToTopButton.style.cursor = "pointer";
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
