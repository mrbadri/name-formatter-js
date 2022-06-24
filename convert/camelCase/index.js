function convertToCamelCase(name) {
  let newname = "";

  for (let i = 0; i < name.length; i++) {
    if (name[i] === "_") {
      i++;
      if (name[i]) newname += name[i].toLocaleUpperCase();
    } else {
      newname += name[i];
    }
  }

  return newname;
}

module.exports = convertToCamelCase;
