// Example of simple JS for interactivity (e.g., logging image names on click)
document.querySelectorAll('.image').forEach(item => {
    item.addEventListener('click', event => {
        console.log(item.querySelector('p').textContent);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});