const convert = require("./convert");
const conditions = require("./utility/conditions");

function nameFormatter({
  data,
  convert: { from = "snack_case", to = "camelCase" },
}) {
  if (typeof data === "object") {
    for (const i in data) {
      if (!data[i]) return data;

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
        convert: { from, to },
      });
    }

    return data;
  }

  // if type of data is not object
  return convert({ name: data, convert: { from, to } });
}

module.exports = nameFormatter;
