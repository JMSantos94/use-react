<div align="center" style="margin-bottom: 50px;">
    <img
        src="https://github.com/jmsantos94/use-react/blob/master/misc/use-react.png"
        width="200px"
        alt="use-react logo"
    />
</div>

# use-react
This package intends to provide a set of small
[hooks](https://reactjs.org/docs/hooks-intro.html). Intended to make working
with [primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
easier by providing a similar API to their native counterparts, as well as,
expanding on those functionalities whenever possible. As a plus, all methods
exposed are immutable by default.

Feel free to submit your
[suggestions](https://github.com/JMSantos94/use-react/issues/1)!

React hooks are still an experimental feature, do not use this on production.

## Table of Content
- [Installation](#installation)
- [Demo](#demo)
- [Documentation](#documentation)
  - [useBoolean](#useboolean)
  - [useNumber](#usenumber)
  - [useArray](#usearray)
  - [useObject](#useobject)
- [Roadmap](#roadmap)

## Installation

Before installing this library, make sure you have installed version
`16.7.0-alpha.0` of `react` and `react-dom`.

Using npm:

``` sh
npm install use-react
```

Using yarn:

``` sh
yarn add use-react
```

## Demo
As our demo, let's create a small to-do app:

``` jsx
import React from 'react';
import useArray from 'use-react/useArray';

const TodoApp = () => {
    const todos = useArray([
        'Get groceries',
        'Finish projects'
    ]);

    const handleSubmission = e => {
        if (e.key === 'Enter')
            todos.push(e.value);
    };

    return (
        <div>
            <ul>
                {todos.map(todo => (
                    <li>{ todo }</li>
                ))}
            </ul>
            <input
                onKeyPress={handleSubmission}
                type="text"
            />
        </div>
    );
};

export default TodoApp;

```
Without `use-react` using `push` directly could have been seen as an
[anti-pattern](https://daveceddia.com/why-not-modify-react-state-directly/).
That's where `use-react` comes in handy it not only makes working with
primitives easier, it also works in your best interests. Behind the scenes all
methods are immutable, and "react-safe".

## Documentation

### useBoolean

Constructor:

```jsx
import useBoolean from 'use-react/useBoolean';
const bool = useBoolean(initialState);
```

| Parameters | Description|
| ------------- | ------------- |
| initialState | Initial state of our `Boolean`. Defaults to `false`. |

This custom hook returns an object with the following properties, and methods:

| Properties | Description|
| ------------- | ------------- |
| value | The current value of our `Boolean`.|

| Methods | Description|
| ------------- | ------------- |
| toggle() | Toggles the current value of our boolean|
| setTrue() | Forces the value of our boolean to `true`|
| setFalse() | Forces the value of our boolean to `false`|
| toString() | Returns a string of our boolean: `true => 'true'` and `false => 'false'`|

---

### useNumber

Constructor:

```jsx
import useNumber from 'use-react/useNumber';
const num = useNumber(initialState);
```

| Parameters | Description|
| ------------- | ------------- |
| initialState | Initial state of our `Number`. Defaults to `0` |

This custom hook returns an object with the following properties, and methods:

| Properties | Description|
| ------------- | ------------- |
| value | The current value of our `Number`|

| Methods | Description|
| ------------- | ------------- |
| set(`newValue`) | Sets our value to the passed `newValue`|
| add(`addend`) | Takes a `addend` and adds it to our total value|
| subtract(`subtrahend`) | Takes a `subtrahend` and subtracts it from our total value|
| multiply(`multiplier`) | Multiplies our value by the given `mulitiplier`|
| divide(`divisor`) | Divides our value by the given `divisor`|
| pow(`exponent`) | Raises our value to the power of `exponent` |
| sqrt() | Sets our value to its square root |
| min([`num2`[, `num3`[, ...]]]) | Sets our value to lowest number passed as a parameter|
| max([`num2`[, `num3`[, ...]]]) | Sets our value to highest number passed as a parameter|
| isNaN() | Returns `true` if our value is `NaN`, otherwise `false`|
| isFinite() | Returns `true` if our value is not `Inifity`, `NaN`, or `undefined`|
| isSafeInteger() | Returns `true` if our integer is a "safe integer"|
| toLocaleString(`...args`) | Same as the native `toLocaleString`, using our value|
| toString(`...args`) | Returns our number as a `String`|

---

### useArray

Constructor:

```jsx
import useArray from 'use-react/useArray';
const arr = useArray(initialState);
```

| Parameters | Description|
| ------------- | ------------- |
| initialState | Initial state of our `Array`. Defaults to `[]` |

This custom hook returns an object with the following properties, and methods:

| Properties | Description|
| ------------- | ------------- |
| value | Returns a reference to our array|
| length | Getter that returns the size of our array|

| Methods | Description|
| ------------- | ------------- |
| set(`newArr`) | Sets our array to `newArr`|
| push(`...args`) | Appends the passed arguments to our array|
| pop() | Removes and returns the last value of our array |
| unshift(`...args`) | Prepends the passed arguments to our array|
| shift() | Removes and returns the first value of our array |
| concat(`...args`) | Concatenates the passed arguments to our array |
| map(`...args`) | Same as `Array.prototype.map` |
| reduce(`...args`) | Same as the native `Array.prototype.reduce`|
| filter(`...args`) | Same as the native `Array.prototype.filter`|
| forEach(`...args`) | Same as the native `Array.prototype.forEach`|

**Note**: all methods are mutations-free.

---

### useObject

Constructor:

```jsx
import useObject from 'use-react/useObject;
const obj = useObject(initialState);
```

| Parameters | Description|
| ------------- | ------------- |
| initialState | Initial state of our `Object`. Defaults to `{}` |

This custom hook returns an object with the following properties, and methods:

| Properties | Description|
| ------------- | ------------- |
| value | Returns a reference to our object|

| Methods | Description|
| ------------- | ------------- |
| set(`newObj`) | Sets our array to `newObj`|
| merge(`...args`) | Shallow merge of the passed arguments to our object|
| entries(`...args`) | Same as the native `Array.prototype.entries`|
| values(`...args`) | Same as the native `Array.prototype.values`|
| keys(`...args`) | Same as the native `Array.prototype.keys`|

**Note**: all methods are mutations-free.

## Roadmap

- [] Clean playground documentation (https://use-react.netlify.com/)
- [] Explore other APIs worth adding to this library, or methods to existing ones
