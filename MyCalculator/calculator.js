var firstNum = 0;
var op; //紀錄運算符號

function numClick(num) {
    document.getElementById('result').innerHTML =
        document.getElementById('result').innerHTML + num;
};

function operatorClick(str) {

    if (firstNum == 0) {
        firstNum = document.getElementById('result').innerHTML;
    } else {
        count();
    }
    op = str;
    firstNum = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = "";
    console.log(firstNum);
    console.log(op);

};

function count() {
    if (op == '+') {
        temp = parseFloat(firstNum) + parseFloat(document.getElementById('result').innerHTML)
    } else if (op == '-') {
        temp = parseFloat(firstNum) - parseFloat(document.getElementById('result').innerHTML)
    } else if (op == '*') {
        temp = parseFloat(firstNum) * parseFloat(document.getElementById('result').innerHTML)
    } else if (op == '/') {
        temp = parseFloat(firstNum) / parseFloat(document.getElementById('result').innerHTML)
    };
    document.getElementById('result').innerHTML = temp;
}

function answer() {
    firstNum;
    op;
    count();
    document.getElementById('result').innerHTML = temp;
    firstNum = 0;
    op = '';
};

function clearClick() {
    // firstNum = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = "";
};