function foo(str, exclusion) {
    for(let j = 0; j < exclusion.length; j++) {
        let newStr = '';
        for(let i = 0; i < str.length; i++) {
            if (str[i] !== exclusion[j]) {
                newStr += str[i];
            }
        }
        str = newStr; // eslint-disable-line 
    }
    return str;
}

foo('Hello', ['o', 'l']);
