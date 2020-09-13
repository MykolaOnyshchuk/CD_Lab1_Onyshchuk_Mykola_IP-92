function arrCreator(n) {
    let arr = new Array();
    for (i = 0; i < n; i++)
    {
        arr[i] = i;
    }
    return arr;
}

function div(num1, num2, num3) {
    if (num1 % num2 === 0 && num1 % num3 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function capitalize(str) {
    const capFirstLetter = str.charAt(0).toUpperCase() + str.slice(1);
    return capFirstLetter;
}

const a = arrCreator(6);
console.log(a);
const b = div(3, 2, 1);
console.log(b);
const c = capitalize("honda");
console.log(c);