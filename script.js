// Unified JavaScript for interactivity, accessibility improvements, and smooth scroll
document.addEventListener('DOMContentLoaded', () => {

    // Interactivity for images: log names and display in a dedicated area
    document.querySelectorAll('.image').forEach(item => {
        item.addEventListener('click', event => {
            const imageName = item.querySelector('p').textContent;
            console.log(imageName);
            // Displaying the name in a dedicated area (assuming an element with ID 'info' exists)
            const infoArea = document.getElementById('info');
            if (infoArea) {
                infoArea.textContent = `Selected: ${imageName}`;
                infoArea.removeAttribute('hidden'); // Make sure the info area is visible when updated
            }
            // Optionally, trigger expandable image view here
            // You would need to implement additional logic and UI components for this feature
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

});

// Notes:
// 1. This script assumes you have an element with ID 'info' in your HTML for displaying selected image names.
// 2. For the expandable image view feature, you will need to design and implement the modal or expanded view UI in your HTML/CSS.
//    The placeholder comment indicates where you might initiate this feature.
// 3. Ensure your HTML contains the necessary 'aria-live' attribute on the 'info' element to improve accessibility.
//    Example: <div id="info" aria-live="polite" hidden>Image info will appear here</div>