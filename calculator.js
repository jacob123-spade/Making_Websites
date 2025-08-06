const display = document.querySelector('.main h2');
const buttons = document.querySelectorAll('.calculator_buttons button');

let currentInput = '';
let resetDisplayNext = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === '=') {
            try {
                // 연산자 변환 (× → *, ÷ → /, − → -)
                const expression = currentInput
                    .replace(/×/g, '*')
                    .replace(/÷/g, '/')
                    .replace(/−/g, '-')
                    .replace(/\+/g, '+');

                const result = eval(expression);
                display.textContent = result;
                currentInput = result.toString();
                resetDisplayNext = true;
            } catch (e) {
                display.textContent = 'Error';
                currentInput = '';
                resetDisplayNext = true;
            }
        } else {
            if (resetDisplayNext) {
                currentInput = '';
                resetDisplayNext = false;
            }

            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
