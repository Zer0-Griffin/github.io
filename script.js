// JavaScript functionality for section animations
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        section.addEventListener('mouseover', () => {
            section.style.transform = 'scale(1.05)';
            section.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
        });

        section.addEventListener('mouseout', () => {
            section.style.transform = 'scale(1)';
            section.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
    });
});
