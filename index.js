const convert = require("./convert");
const conditions = require("./utility/conditions");

function nameFormatter({ data, convert: { from = "snake_case", to = "camelCase" } }) {
  switch (typeof data) {
    case "string":
      return convert({ name: data, convert: { from, to } });

    case "object":
      for (const i in data) {
        if (data[i] === undefined) return data;

        // convert name
        const newName = convert({ name: i, convert: { from, to } });

        if (conditions({ name: i, convert: { from, to } })) {
          // add new object
          data = Object.assign(data, { [newName]: data[i] });
          // delete old object
          delete data[i];
        }

        // check type data[newName] for continue convert
        if (typeof data[newName] === "object") {
          data[newName] = nameFormatter({
            data: data[newName],
            convert: { from, to }
          });
        }
      }

      return data;

    default:
      return data;
  }
}

module.exports = nameFormatter;
