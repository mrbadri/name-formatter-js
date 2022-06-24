function conditions({ name, convert: { from, to } }) {
  switch (from) {
    case "camelCase":
      for (let i = 0; i < name.length; i++) {
        if (name[i] === name[i].toLocaleUpperCase()) return true;
      }
      return false;

    case "snack_case":
      return name.includes("_");
  }
}

module.exports = conditions;
