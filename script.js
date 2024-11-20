document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('change-text');
    const heading = document.getElementById('heading');

    button.addEventListener('click', function() {
        if (heading.textContent === "Welcome to Zephyrus Engineering") {
            heading.textContent = 'Explore this Solution';
        } else {
            heading.textContent = 'Welcome to Zephyrus Engineering'
        }
    });
});