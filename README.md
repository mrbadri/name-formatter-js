# Name Formatter JS

This library help you to convert formate names of data.

## Installation

```bash
  npm install name-formatter-js
```

## Usage

####  Import Function
```bash
  import nameFormatter from "name-formatter-js";
```
####  Call Function
```bash
  nameFormatter({
    data: myData,
    convert: {
        from: "snack_case" ,
        to: "camelCase"
    }
});
```

####  Parameters

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
|    data   | all Type | enter your data            |
| from, to  | string   | `camelCase`, `snack_case`  |

## Examples

```javascript
import nameFormatter from 'name-formatter-js';

// test data
const myData = {
    file_type: "image" ,
    list: [
        {
            file_link: "https://example.com"
        }
    ]
};

// call function
nameFormatter({
    data: myData,
    convert: {
        from: "snack_case" ,
        to: "camelCase"
    }
});

// function return:
// {
//    fileType: "image" ,
//    list: [
//        {
//            fileLink: "https://example.com"
//        }
//    ]
// }

```
