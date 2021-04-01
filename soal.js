function isTest(arr) {
    var a = {},
    outArr = [],
    elm;

    for (var i = 0; i < arr.length; i++) {
        elm = arr[i];
        if(!a[elm]) {
            outArr.push(elm);
            a[elm] = true;
        }
    }
    return outArr
}

console.log(isTest(9))


function isTest(n) {
    if (n <= 1) {
        return n;
    }
    else 
    return isTest(n-1) + isTest(n-2)

}

console.log(isTest(14))

function isTest(a,b) {
    if (b == 0) 
    return a;
    else 
    return isTest(b, a%b);
}

console.log(isTest)


function inTest(x) {
    var len = x.length,
    char,
    charCount = {},
    newStr = [];
    for (var i = 0; i < len; i++) {
        char = x[i];
        if (charCount[char]) {
            charCount[char]++;

        }
        else 
        charCount[char] = 1;

    }
    for (var j in charCount)  {
        if (charCount[j] == 1)  {
            newStr.push(j);
        }
    }
    return newStr.join('')
}

console.log(inTest('Dont touch my hand'))


function isTest(str) {
    var arr = str.split(''),
    len = arr.length,
    perms = [],
    rest,
    picked,
    restPerms,
    next;
    if (len == 0) {
        return [str];


    }
    for (var i = 0; i < len; i++) {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

        restPerms = isTest(rest.join(''));

        for (var j = 0, jLen = restPerms.length; j< jLen; j++) {
            next = picked.concat(restPerms[j]);
            perms.push(next.join(''))
        }
    }
    return perms;
}

console.log(isTest('el'))



function isTest(x) {
    var rtnX = '';
    for (var i = x.length -1; i >= 0; i--) {
        rtnX += x[i];
    }
    return rtnX
}

console.log(isTest('123 1234'))


function isTest(str) {
    var arr = str.split(''),
    len = arr.length,
    perms = [],
    rest,
    picked,
    restPerms,
    next;
    if (len == 0 ) {
        return [str];
    }

    for (var i = 0; i < len; i++) {
        rest = Object.create(arr);
        picked = rest.splice(i, 1);

        restPerms = isTest(rest.join(''));

        for (var j = 0, jLen = restPerms.length; j < jLen; j++) {
            next = picked.concat(restPerms[j]);
            perms.push(next.join(''));
        }
    }
    return perms;
}

console.log(isTest('es'))


function isTest(arr) {
    var a = {},
    outArr = [], 
    elm;

    for (var i = 0; i < arr.length; i++) {
        elm = arr[i];
        if(!a[elm]) {
            outArr.push(elm);
            a[elm] = true;
        }
    }
    return outArr;
}


console.log(isTest(10))


function isTest(str) {
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
}

console.log(isTest('I am teacher'))


function isTest(n) {
    var a = [0,1];
    if (n <= 2) return 1;
    for (var i = 2; i <= n; i++ ){
        a[i] = a[i-1]+a[i-2];
    }
    return a[n]
}

console.log(isTest(12))

function isTest(n) {
    var arr = [],
    ds = 2;
    while(n>2) {
        if (n % ds == 0) {
            arr.push(ds);
            n = n/ds;
        }
        else {
            ds++;
        }
    }
    return arr;
}

console.log(isTest(21))


function isTest(a, b) {
    var x = [],
    aElm = a[0],
    bElm = b[0],
    i = 1,
    j = 1;

    if (a.length == 0) {
        return b;
    }

    if (b.length == 0 ) {
        return a;
    }

    while (aElm || bElm) {
        if ((aElm && !bElm) || aElm < bElm) {
            x.push(aElm);
            aElm = a[i++];
        }
        else {
            x.push(bElm);
            bElm = b[j++];
        }
    }
    return x;

}

console.log(isTest([2,5,6,9], [1,2,4,29]))


function isTest(a,b) {
    console.log('before: ', 'a: ', a, 'b: ', b);

    a = a ^ b;
    b = a ^ b;
    a = a ^ b;

    console.log('after: ', 'a: ', a, 'b: ', b);
}

isTest(2,3)


function isTest(x) {
    var rtnX = '';
    for (var i = x.length-1; i >=0; i--) {
        rtnX += x[i];
    }
    return rtnX
}

console.log(isTest('9554'));
