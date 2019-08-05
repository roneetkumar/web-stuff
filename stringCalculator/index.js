// THIS FUNCTION RETURNS SINGLE ELEMENT FROM DOM
_ = ele => document.querySelector(ele);

// THIS FUNCTION RETURNS ARRAY OF ELEMENTS FROM DOM
__ = ele => document.querySelectorAll(ele);

let input = _('input');

_('input').onkeyup = (event) => {
    if (event.keyCode === 13) {
        let string = input.value;
        let brackets = string.replace(/[^(]/g, "").length;
        console.log(brackets);

        do {
            let stringArray = string.trim();

            function checkBrackets(string) {
                if (string.includes('(')) {
                    let bStart = string.lastIndexOf('(') + 1;
                    let bEnd = string.indexOf(')');
                    return string.slice(bStart, bEnd)
                } else {
                    return string;
                }
            };

            let result;

            tempString = checkBrackets(stringArray).trim();
            numArray = tempString.trim().split(/ +/);
            console.log(numArray);

            let operation = '';
            for (let i = 0; i < numArray.length; i++) {
                let ele = numArray[i];
                if (!isNaN(ele)) {
                    ele = +ele;
                    switch (operation) {
                        case '+':
                            result += ele;
                            break;
                        case '-':
                            result -= ele;
                            break;
                        case '*':
                            result *= ele;
                            break;
                        case '/':
                            result /= ele;
                            break;
                        default:
                            result = ele;
                            break;
                    }
                }
                else {
                    operation = ele;
                }
            }
            string = string.replace(`( ${tempString} )`, result);
            console.log(string);
            console.log(numArray);


            if (!isNaN(string)) {
                break;
            }

            if (result !== undefined) {
                _('body h1').innerText = result;
            }

            brackets--;
        } while (brackets >= 0);
    }
}




