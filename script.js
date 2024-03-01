const init = () => {
    const form = document.getElementById('form');

    form.addEventListener('submit', () => {
        const mode = document.getElementById('mode').value;
        const input = document.getElementById('ipv4').value;
        const output = document.getElementById('output');
        const resultList = [];
        let result = '';

        if (isValid(input)) {
        }

        octets = input.split('.');

        switch (mode) {
            case 'decimal -> binary':
                for (let octetString in octets) {
                    let binary = '';
                    let octet = parseInt(octetString);
                    while (octet > 0) {
                        [octet, rest] = divMod(octet, 2);
                        console.log(octet, rest);
                        binary = rest + binary;
                    }
                    resultList.push(binary);
                }
                result = resultList.join('.');
                break;
            case 'decimal -> hexadecimal':
                break;
            case 'binary -> decimal':
                break;
            case 'binary -> hexadecimal':
                break;
            case 'hexadecimal -> decimal':
                break;
            case 'hexadecimal -> binary':
                break;
            default:
                break;
        }

        output.value = result;
        console.log(result);
    });
};

const isValid = () => {
    return true;
};

const divMod = (x, y) => {
    return [Math.trunc(x / y), x % y];
};

document.addEventListener('DOMContentLoaded', init);
