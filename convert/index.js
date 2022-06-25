const convertToCamelCase = require("./camelCase");
const convertToSnakeCase = require("./snakeCase");

function convert({ name, convert: { from, to } }) {
  switch (to) {
    case "camelCase":
      return convertToCamelCase(name);
    case "snake_case":
      return convertToSnakeCase(name);

    default:
      console.error("Please enter 'convertTo'");
      break;
  }
}

module.exports = convert;
