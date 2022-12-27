'use strict';

const main = () => {
    const number = prompt('Введите число:');
    const arr = number.split('');
    if(isNaN(+number)){
        alert('Введите число!');
        return;
    }
    if(arr[arr.length - 1] === '1'){
        alert(`Вам ${number} год`);
        return;
    }

    if(arr[arr.length - 1] >= '5'){
        alert(`Вам ${number} лет`);
        return;
    }

    if(arr[arr.length - 1] < '5'){
        alert(`Вам ${number} года`);
    }

}

main()





