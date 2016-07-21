/**
 * 第一个只出现一次的字符
 * */

function firstOnlyOne(str) {
    if (!str) {
        return null;
    }

    var m = new Map();

    for (var i = 0, l = str.length; i < l; i++) {

        var ele = str[i];

        if (m.has(ele)) {
            m.delete(ele);
        } else {
            m.set(ele, i);
        }
    }

    // if (m.keys().length) {
    //     return (m.keys())[0];
    //     // return a;  //找出所有只出现一次的字符
    // }
    // return m.keys();
    return m.keys();
}

console.log(firstOnlyOne(''));
console.log(firstOnlyOne('hello'));
console.log(firstOnlyOne('hhaay'));
console.log(firstOnlyOne('hhaayy'));