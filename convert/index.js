const convertToCamelCase = require("./camelCase");
const convertToSnackCase = require("./snackCase");

function convert({ str, convertTo }) {
  switch (convertTo) {
    case "camelCase":
      return convertToCamelCase(str);
    case "snack_case":
      return convertToSnackCase(str);

    default:
      console.error("Please enter 'convertTo'");
      break;
  }
}

module.exports = convert;
