// Mobile menu toggle
document.querySelector('.menu-button').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const menuButton = document.querySelector('.menu-button');
    if (event.target !== menuButton && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const readMoreBtn = document.getElementById("readMoreBtn")
  
    readMoreBtn.addEventListener("click", () => {
      // Add your read more functionality here
      console.log("Read More button clicked")
  
    })
  
    // Add hover effect
    readMoreBtn.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
    })
  
    readMoreBtn.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav .nav-links a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute("href").substring(1); // Get the section id
            const targetSection = document.getElementById(targetId); // Find the section

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for navbar height if needed
                    behavior: "smooth" // Smooth scrolling effect
                });
            }
        });
    });
});


  