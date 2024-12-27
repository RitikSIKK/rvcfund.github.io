document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Image modal functionality
    const images = document.querySelectorAll('.image-grid img');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = '<div class="modal-content"><span class="close">&times;</span><img src="" alt=""/></div>';
    document.body.appendChild(modal);

    const modalImg = modal.querySelector('img');
    const closeBtn = modal.querySelector('.close');

    images.forEach(image => {
        image.addEventListener('click', () => {
            modalImg.src = image.src;
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', event => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerText = '↑';
    document.body.appendChild(backToTop);

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Toggle hamburger menu on mobile
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const navMenu = document.querySelector('nav');

    if (hamburgerIcon && navMenu) {
        hamburgerIcon.addEventListener('click', () => {
            navMenu.classList.toggle('nav-active');
        });
    }

    // Adding Google Form links for "Join Us as Investor" and "Join Us as Entrepreneur"
   

    // Adding FAQ submission link

});
