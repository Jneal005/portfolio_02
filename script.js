// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const toggle = document.getElementById('theme-toggle');
    const body = document.body;
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    toggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            toggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem('theme', 'light');
            toggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    });

    // Particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // AOS Init
    AOS.init({ duration: 1200 });

    // Typing Effect
    const tagline = document.getElementById('tagline');
    const text = 'Computer Scientist | Emerging Tech Leader | Builder of Impactful Digital Solutions';
    let i = 0;
    function type() {
        if (i < text.length) {
            tagline.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }
    type();

    // Project Filtering
    const filterBtns = document.querySelectorAll('.filter-buttons button');
    const projects = document.querySelectorAll('.project-card');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            projects.forEach(proj => {
                if (category === 'all' || proj.dataset.category === category) {
                    proj.style.display = 'block';
                } else {
                    proj.style.display = 'none';
                }
            });
        });
    });

    // Project Modals
    const modal = document.getElementById('modal');
    const close = document.querySelector('.close');
    const detailsBtns = document.querySelectorAll('.details-btn');
    detailsBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            // Placeholder details
            modal.querySelector('p').textContent = `Detailed info about Project ${index + 1}.`;
            modal.style.display = 'flex';
        });
    });
    close.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', e => { if (e.target === modal) modal.style.display = 'none'; });

    // Skills Radar Chart
    const ctx = document.getElementById('skills-chart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Python', 'JavaScript', 'HTML/CSS', 'React', 'Node.js', 'C++', 'TensorFlow', 'Flutter'],
            datasets: [{
                label: 'Proficiency',
                data: [90, 85, 90, 80, 75, 80, 70, 75],
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 1
            }]
        },
        options: { scale: { ticks: { beginAtZero: true } } }
    });

    // Form Validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', e => {
        const email = document.getElementById('email').value;
        if (!email.includes('@')) {
            alert('Invalid email');
            e.preventDefault();
        }
    });

    // Back to Top
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        backToTop.style.display = window.scrollY > 100 ? 'block' : 'none';
    });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
});
