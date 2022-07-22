function digToStr(dig) {
    if (dig === 0) return 0;
    let result = '';
    if (dig < 0) {
        dig = -dig;
        result += 'Минус';
    }
    let h = Math.floor(dig / 100); //разряд сотен
    let t = Math.floor((dig % 100) / 10); //разряд десяток
    let o = dig % 10; // разряд единиц

    switch (h) {
        case 1:
            result += ' Сто';
            break;
        case 2:
            result += ' Двести';
            break;
        case 3:
            result += ' Триста';
            break;
        case 4:
            result += ' Четыреста';
            break;
        case 5:
            result += ' Пятьсот';
            break;
        case 6:
            result += ' Шестьсот';
            break;
        case 7:
            result += ' Семьсот';
            break;
        case 8:
            result += ' Восемьсот';
            break;
        case 9:
            result += ' Девятьсот';
            break;
        default:
            break;
    }

    switch (t) {
        case 1:
            switch (o) {
                case 0:
                    result += ' Десять';
                    break;
                case 1:
                    result += ' Одиннадцать';
                    break;
                case 2:
                    result += ' Двенадцать';
                    break;
                case 3:
                    result += ' Тринадцать';
                    break;
                case 4:
                    result += ' Четырнадцать';
                    break;
                case 5:
                    result += ' Пятнадцать';
                    break;
                case 6:
                    result += ' Шестнадцать';
                    break;
                case 7:
                    result += ' Семнадцать';
                    break;
                case 8:
                    result += ' Восемнадцать';
                    break;
                case 9:
                    result += ' Девятнадцать';
                    break;
            }
            o = 0;
            break;
        case 2:
            result += ' Двадцать';
            break;
        case 3:
            result += ' Тридцать';
            break;
        case 4:
            result += ' Сорок';
            break;
        case 5:
            result += ' Пятьдесят';
            break;
        case 6:
            result += ' Шестьдесят';
            break;
        case 7:
            result += ' Семьдесят';
            break;
        case 8:
            result += ' Восемьдесят';
            break;
        case 9:
            result += ' Девяносто';
            break;
        default:
            break;
    }

    switch (o) {
        case 1:
            result += ' Один';
            break;
        case 2:
            result += ' Два';
            break;
        case 3:
            result += ' Три';
            break;
        case 4:
            result += ' Четыре';
            break;
        case 5:
            result += ' Пять';
            break;
        case 6:
            result += ' Шесть';
            break;
        case 7:
            result += ' Семь';
            break;
        case 8:
            result += ' Восемь';
            break;
        case 9:
            result += ' Девять';
            break;
        default:
            break;
    }

    return result.trim();
} // функция для представления числа в текстовой форме

function randomAnswer() { //
    let random = Math.round(Math.random() * 2);
    let answer = (random === 1) ? 'Может быть это число' :
        (random === 2) ? 'Возможно это число' :
            'Ваше число';
    return answer;
} // функция для рандомного вопроса

function randomSuccess() {
    let random = Math.round(Math.random() * 2);
    let success = (random === 1) ? 'Я так и думал\n\u{1F60E}' :
        (random === 2) ? 'Проще простого\n\u{1F60B}' :
            'Ура!!!\n\u{1F973}';
    return success;
} // функция для рандомного успеха

let minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
minValue = (minValue < -999) ? -999 : minValue;
maxValue = (maxValue > 999) ? 999 : maxValue;
minValue = (isNaN(minValue)) ? 0 : minValue;
maxValue = (isNaN(maxValue)) ? 100 : maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;

if (digToStr(answerNumber).length < 20) {
    answerField.innerText = `${randomAnswer()} ${digToStr(answerNumber)}?`;
} else {
    answerField.innerText = `${randomAnswer()} ${answerNumber}?`;
}

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            if (digToStr(answerNumber).length < 20) {
                answerField.innerText = `${randomAnswer()} ${digToStr(answerNumber)}?`;
            } else {
                answerField.innerText = `${randomAnswer()} ${answerNumber}?`;
            }
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun) {
        if (minValue === maxValue) {
            const phraseRandom = Math.round(Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            if (digToStr(answerNumber).length < 20) {
                answerField.innerText = `${randomAnswer()} ${digToStr(answerNumber)}?`;
            } else {
                answerField.innerText = `${randomAnswer()} ${answerNumber}?`;
            }
        }
    }
})

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
    minValue = (minValue < -999) ? -999 : minValue;
    maxValue = (maxValue > 999) ? 999 : maxValue;
    minValue = (isNaN(minValue)) ? 0 : minValue;
    maxValue = (isNaN(maxValue)) ? 100 : maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    answerField.innerText = `${randomAnswer()} ${answerNumber}?`;
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun) {
        answerField.innerText = `${randomSuccess()}`;
        gameRun = false;
    }
})

