const $resultEncrypt = document.getElementById('result-first')
const $resultDecrypt = document.getElementById('result-second')
const $form1 = document.forms['form-first'];
const $form2 = document.forms['form-second']

const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const alphabetInverse = ['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A']

$form1.addEventListener('submit', (e) => {
    e.preventDefault();
    $resultEncrypt.innerHTML = [... $form1.text.value].map(char => caesarCipher(char)).join('');
})

$form2.addEventListener('submit', (e) => {
    e.preventDefault();
    $resultDecrypt.innerHTML = [... $form2.text.value].map(char => decrypt(char)).join('');
})

function caesarCipher(char) {
    const key = Number($form1.key.value);
    if (alphabet.includes(char.toUpperCase())){
        const index = alphabet.indexOf(char.toUpperCase());
        const newIndex = (index + key) % 26;
        return alphabet[newIndex]
    } else {
        return char
    }
}

function decrypt(char) {
    const key = Number($form2.key.value);
    if (alphabetInverse.includes(char.toUpperCase())){
        const index = alphabetInverse.indexOf(char.toUpperCase());
        const newIndex = (index + key) % 26;
        return alphabetInverse[newIndex]
    } else {
        return char
    }
}