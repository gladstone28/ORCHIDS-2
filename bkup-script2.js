// Improved Logging for Accessibility
document.querySelectorAll('.image').forEach(item => {
    item.addEventListener('click', event => {
        const imageName = item.querySelector('p').textContent;
        console.log(imageName);
        // Example for displaying the name in a dedicated area (assuming an element with ID 'info' exists)
        document.getElementById('info').textContent = `Selected: ${imageName}`;
        // Ensure 'info' is an aria-live region for assistive technologies in your HTML
    });
});

// Smooth Scroll Refactoring
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Optional: Expandable Image View (requires additional HTML/CSS for the modal)
document.querySelectorAll('.image img').forEach(img => {
    img.addEventListener('click', function() {
        // Code to open the modal and display the clicked image in an expanded view
    });
});

// Remember to dynamically update 'aria-live' regions or modals with appropriate aria-labels or alt texts for the expanded images for accessibility.