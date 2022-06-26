const convert = require("./convert");
const conditions = require("./utility/conditions");

function nameFormatter({ data, convert: { from = "snake_case", to = "camelCase" } }) {
  if (typeof data === "object") {
    for (const i in data) {
      if (!data[i] && data[i] !== false) return data;

      // convert name
      const newName = convert({ name: i, convert: { from, to } });

      if (conditions({ name: i, convert: { from, to } })) {
        // add new object
        data = Object.assign(data, { [newName]: data[i] });
        // delete old object
        delete data[i];
      }

      data[newName] = nameFormatter({
        data: data[newName],
        convert: { from, to }
      });
    }

    return data;
  } else if (typeof data === "string") {
    return convert({ name: data, convert: { from, to } });
  }

  // if type of data is not object
  return data;
}

module.exports = nameFormatter;
