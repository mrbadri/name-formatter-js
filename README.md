# Name Formatter JS

This library help you to convert Formate name of data.

## Installation

Install with npm

```bash
  npm install name-formatter-js
```

## Usage/Examples

```javascript
import nameFromatter from 'name-formatter-js'

// test data
const myData = {
    file_type: "image" ,
    list: [
        {
            file_link: "https://example.com"
        }
    ]
}


nameFromatter({
    data: myData,
    convert: {
        from: "snack_case" ,
        to: "camelCase"
    }
})

// this function return
{
    fileType: "image" ,
    list: [
        {
            fileLink: "https://example.com"
        }
    ]
}

```
