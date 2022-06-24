function checkCamelCase(str) {
    console.log(str);
    for (let i = 0; i < str.length; i++) {
        if(str[i] === str[i].toLocaleUpperCase())  {
            return true
        }      
    }

    return false
}

module.exports = checkCamelCase;