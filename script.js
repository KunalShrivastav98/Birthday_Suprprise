// Set birth date here
const birthDate = new Date('2005-11-07'); // Replace YYYY-MM-DD with Khushi's birthdate

function calculateAge() {
    const now = new Date();
    const ageInMs = now - birthDate;
    const years = Math.floor(ageInMs / (1000 * 60 * 60 * 24 * 365));
    const hours = Math.floor((ageInMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((ageInMs / (1000 * 60)) % 60);

    document.getElementById('age-display').innerText = 
        `${years} years, ${hours} hours, and ${minutes} minutes of bringing light into the world!`;
}

// Delay to reveal age section
function revealAgeSection() {
    const ageSection = document.getElementById('age-section');
    ageSection.classList.add('visible');
    calculateAge();
}

// Trigger reveal 3 seconds after page load
setTimeout(revealAgeSection, 3000);
