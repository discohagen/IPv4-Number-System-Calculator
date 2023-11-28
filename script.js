function handleKeyDown(event) {
    if (
        event.target === null ||
        event.target instanceof HTMLInputElement === false
    ) {
        return;
    }
    let focusedInput = event.target;
    let keyDown = event.key;
    if (/\d/.test(keyDown)) {
        console.log('Digit down');
        if (
            focusedInput.id != 'input4' &&
            focusedInput.selectionStart === 3
        ) {
            let increment = (
                parseInt(focusedInput.id.match(/\d+/)[0]) +
                1
            ).toString();
            document
                .getElementById('input' + increment)
                .focus();
        }
    } else {
        switch (keyDown) {
            /* case 'Control':
                console.log('Control down');
                break; */
            case 'Backspace':
                console.log('Backspace down');
                if (
                    focusedInput.id != 'input1' &&
                    focusedInput.selectionStart === 0
                ) {
                    let increment = (
                        parseInt(
                            focusedInput.id.match(/\d+/)[0]
                        ) - 1
                    ).toString();
                    document
                        .getElementById('input' + increment)
                        .focus();
                }
                break;
            case 'Enter':
                console.log('Enter down');
                break;
            case 'Tab':
                console.log('Tab down');
                break;
            case 'ArrowRight':
                console.log('Right Arrow down');
                if (
                    focusedInput.id != 'input4' &&
                    focusedInput.selectionStart ===
                        focusedInput.value.length
                ) {
                    let increment = (
                        parseInt(
                            focusedInput.id.match(/\d+/)[0]
                        ) + 1
                    ).toString();
                    document
                        .getElementById('input' + increment)
                        .focus();
                }
                break;
            case 'ArrowLeft':
                console.log('Left Arrow down');
                if (
                    focusedInput.id != 'input1' &&
                    focusedInput.selectionStart === 0
                ) {
                    let increment = (
                        parseInt(
                            focusedInput.id.match(/\d+/)[0]
                        ) - 1
                    ).toString();
                    document
                        .getElementById('input' + increment)
                        .focus();
                }
                break;
            default:
                console.log('Key down does not matter');
                event.preventDefault();
                break;
        }
    }
    return;
}

function validInputForLogic(input) {}

function parseDecimalToBinary(dec) {}

function parseDecimalToHex(dec) {}

function parseBinaryToDecimal(bin) {}

function parseBinaryToHex(bin) {}

function parseHexToDecimal(hex) {}

function parseHexToBinary(hex) {}

function handleSubmit() {}

function init() {
    // form handleSubmit
    document
        .querySelector('form')
        .addEventListener('submit', handleSubmit);

    // inputs validInputAtClient
    document
        .querySelectorAll('.ipv4_input')
        .forEach((input) => {
            input.addEventListener(
                'keydown',
                handleKeyDown
            );
        });
}

document.addEventListener('DOMContentLoaded', init);
