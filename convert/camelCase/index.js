function convertToCamelCase(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "_") {
      i++;
      if (str[i] && i - 1 !== 0) newStr += str[i].toLocaleUpperCase();
    } else {
      newStr += str[i];
    }
  }

  return newStr;
}

module.exports = convertToCamelCase;
