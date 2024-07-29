const passwordBox = document.getElementById('password');
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghifklmnopqrstuvwxyz';
const number = '0123456789';
const symble = '!@#&*()-+={}[]/?><";$%^|~`';

const allchars = upperCase + lowerCase + number + symble;
function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symble[Math.floor(Math.random() * symble.length)];

    while (length > password.length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    const passwordBox = document.getElementById('password');
    passwordBox.select();
    passwordBox.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(passwordBox.value)
        .then(() => {
            alert('Password copied to your clipboard');
        })
        .catch(err => {
            alert('Failed to copy password');
        })
}