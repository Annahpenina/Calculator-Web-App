  let newLine = true;
        let value1 = 0;
        let currentOperator = null;

        function digitBtnPressed(button) {
            const inputBox = document.getElementById("inputBox");

            if (newLine || inputBox.value === "0") {
                inputBox.value = button;
                newLine = false;
            } else {
                inputBox.value += button;
            }
        }

        function btnACPressed() {
            document.getElementById("inputBox").value = "0";
            newLine = true;
            value1 = 0;
            currentOperator = null;
        }

        function operatorBtnPressed(operator) {
            value1 = parseFloat(document.getElementById("inputBox").value);
            currentOperator = operator;
            newLine = true;
        }

        function equalsBtnPressed() {
            const value2 = parseFloat(document.getElementById("inputBox").value);
            let result = 0;

            switch (currentOperator) {
                case "+":
                    result = value1 + value2;
                    break;
                case "-":
                    result = value1 - value2;
                    break;
                case "*":
                    result = value1 * value2;
                    break;
                case "/":
                    result = value2 !== 0 ? value1 / value2 : "Error";
                    break;
                default:
                    result = value2;
            }

            document.getElementById("inputBox").value = result;
            newLine = true;
        }