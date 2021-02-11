---
title: 使用es5实现es6中部分API功能
categories: JavaScript
tags:
- js
- es5
- es6
copyright: true
---

1. Array.prototype.find()
``` js
function findFn(arr, callback) {
   if(typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
   }
   for(var i = 0; i < arr.length; i++) {
       if(callback(Number(arr[i])) === true) {
           return arr[i];
       };
   }
   return undefined;
}
var arr = ['string' ,true, ‘’, NaN, 1, 2, 3, 4, undefined, null];
var value = findFn(arr, function(n) {
   return n > 1;
});
console.log(value);
```
2. Array.prototype.findIndex()
``` js
function findIndexFn(arr, callback) {
   if (typeof callback !== 'function') {
       throw new TypeError(callback + 'is not a function');
   }
   for (var i = 0; i < arr.length; i++) {
       if (callback(Number(arr[i])) === true) {
           return i;
       };
   }
   return undefined;
}

var arr = ['ddddd', true, '', NaN, 1, 2, 3, 4, undefined, null];

var value = findIndexFn(arr, function(n) {
   return n > 2;
});

console.log(value);

```

3. Array.prototype.fill()
``` js
function fillFn(arr) {
   for (var i = 0; i < arr.length; i++) {
       if(false === Boolean(Number(arguments[2])) && undefined === arguments[3]) {
           arr[i] = arguments[1];
       } else if(undefined !== arguments[2] && undefined === arguments[3]) {
           if(i >= arguments[2]) {
               arr[i] = arguments[1];
           }
       } else if(undefined !== arguments[2] && undefined !== arguments[3]) {
           if(i >= arguments[2] && i < arguments[3]) {
               arr[i] = arguments[1];
           }
       }
   }
   return arr;
}

var arr = ['ddddd', true, '', NaN, 1, 2, 3, 4, undefined, null];

var value = fillFn(arr, 7);

console.log(value);
```

3. Array.prototype.includes()
``` js
function includesFn(arr) {
   for (var i = 0; i < arr.length; i++) {
      if(String(arguments[1]) === 'NaN') {
          String(arr[i]) === 'NaN';
          return true;
      }
      if(arr[i].indexOf(arguments[1])) {
          return true;
      }
      if(Boolean(Number(arguments[2]))) {
          if(i >= Number(arguments[2]) {
                if(arr[i].indexOf(arguments[1])) {
                    return true;
                }
          }
      }
   }
   return false;
}

var arr = ['ddddd', true, '', NaN, 1, 2, 3, 4, undefined, null];

var value = includesFn(arr, NaN);

console.log(value);
```