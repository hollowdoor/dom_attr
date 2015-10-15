dom-attr
========

Install
-------

`npm install --save dom-attr`

Usage
-----

```javascript
var domAttr = require('dom-attr'),
    el = document.querySelector('#my-element');

//Set attributes
domAttr(el, {editable: true});
domAttr(el, 'editable', true);
//Get attributes
var editable = domAttr(el, 'editable'),
    attributes = domAttr(el, ['editable', 'id']);

console.log('editable = '+editable);
for(var n in attributes){
    console.log('attribute '+n+' = '+attributes[n]);
}
```

About
-----

It works a lot like jQuery `attr`.
