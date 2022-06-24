const convertToCamelCase = require("./camelCase");
const convertToSnackCase = require("./snackCase");

function convert({ name, convert: { from, to } }) {
  switch (to) {
    case "camelCase":
      return convertToCamelCase(name);
    case "snack_case":
      return convertToSnackCase(name);

    default:
      console.error("Please enter 'convertTo'");
      break;
  }
}

module.exports = convert;
