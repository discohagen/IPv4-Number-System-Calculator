function changeFocusedInput(event) {
    let focusedInput = event.target;
    if (
        focusedInput.id != 'input4' &&
        event.key === 'ArrowRight' &&
        focusedInput.selectionStart ===
            focusedInput.value.length
    ) {
        let number = (
            parseInt(focusedInput.id.match(/\d+/)[0]) + 1
        ).toString();
        document.getElementById('input' + number).focus();
    } else if (
        focusedInput.id != 'input1' &&
        event.key === 'ArrowLeft' &&
        focusedInput.selectionStart === 0
    ) {
        let number = (
            parseInt(focusedInput.id.match(/\d+/)[0]) - 1
        ).toString();
        document.getElementById('input' + number).focus();
    }
    return;
}

function validInputAtClient(event) {
    let key = String.fromCharCode(event.which);
    let focusedInput = event.target;
    if (key.match(/\d|[\b]/)) {
        //TODO: test logic to change focus to next input when the 3rd digit got entered.
        if (focusedInput.selectionStart === 3) {
            let number = (
                parseInt(focusedInput.id.match(/\d+/)[0]) +
                1
            ).toString();
            document
                .getElementById('input', number)
                .focus();
        }
    } else {
        event.preventDefault();
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
            //TODO: combine Events and Functions to "keydown" handling.
            // -> First try with a huge switch case for event.key disabled functions with keys like
            // "control" or "enter" and also the normal "arrow key" logic inside an input element.
            input.addEventListener(
                'keypress',
                validInputAtClient
            );
            input.addEventListener(
                'keydown',
                changeFocusedInput
            );
        });
}

document.addEventListener('DOMContentLoaded', init);
