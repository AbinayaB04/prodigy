
const input = document.querySelector('input');
const pwStrengthEl = document.querySelector('.strength');
const indicatorEl = document.querySelector('.indicator');

const colors = ['#ff0000', '#ff6666', '#ffcc00', '#66ff66', '#03ac13'];
const texts = ['very weak', 'weak', 'medium', 'strong', 'very strong'];

function checker(width, text, background, color) {
    indicatorEl.style.width = width;
    indicatorEl.style.background = background;
    pwStrengthEl.innerText = text;
    pwStrengthEl.style.color = color;
}

input.addEventListener('input', () => {
    const value = input.value;
    const length = value.length;

    let strength = 0;
    if (length > 0) strength++;          // Very Weak
    if (length > 4) strength++;          // Weak
    if (length > 7) strength++;         // Medium
    if (/[A-Z]/.test(value)) strength++; // Strong
    if (/[0-9]/.test(value) && /[^A-Za-z0-9]/.test(value)) strength++; // Very Strong

    checker(`${(strength / 5) * 100}%`, texts[strength - 1], colors[strength - 1], colors[strength - 1]);
});

