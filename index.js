const convert = require("./convert");
const checkCamelCase = require("./utility/checkCamelCase");

function nameFormatter({ data, convertTo }) {
  if (typeof data === "object") {
    for (const i in data) {
      if (!data[i]) return data;

      const newName = convert({ str: i, convertTo });

      if ( checkCamelCase(i))
        delete Object.assign(data, { [newName]: data[i] })[i];

      data[newName] = nameFormatter({ data: data[newName], convertTo });
    }
  }

  return convert({ str: data, convertTo });
}

module.exports = nameFormatter;
