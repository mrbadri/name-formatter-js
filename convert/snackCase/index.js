function convertToSnackCase(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLocaleUpperCase()) {
      newStr += `_${str[i].toLowerCase()}`;
    } else {
      newStr += str[i];
    }
  }

console.log("newStr", newStr);

  return newStr;
}

module.exports = convertToSnackCase;
