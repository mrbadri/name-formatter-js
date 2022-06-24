function convertToSnackCase(name) {
  let newname = "";

  for (let i = 0; i < name.length; i++) {
    if (name[i] === name[i].toLocaleUpperCase()) {
      newname += `_${name[i].toLowerCase()}`;
    } else {
      newname += name[i];
    }
  }

  return newname;
}

module.exports = convertToSnackCase;
