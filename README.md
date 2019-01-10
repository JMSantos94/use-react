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
expanding on those functionalities whenever possible.

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
        <>
            <ul>
                {todos.map(todo => (
                    <li>{ todo }</li>
                ))}
            </ul>
            <input
                onKeyPress={handleSubmission}
                type="text"
            />
        </>
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
const bool = useBoolean(/* Parameters */);
```

| Parameters | Description|
| ------------- | ------------- |
| initialState | Initial state of our `Boolean`. Defaults to `false`. |

This custom hook returns an object with the following properties, and methods:

| Properties | Description|
| ------------- | ------------- |
| value | The current value of our boolean.|

| Methods | Description|
| ------------- | ------------- |
| toggle | Toggles the current value of our boolean.|
| setTrue | Forces the value of our boolean to `true`|
| setFalse | Forces the value of our boolean to `false`|
| toString | Returns a string of our boolean: `true => 'true'` and `false => 'false'`|

### useNumber

Constructor:

```jsx
import useNumber from 'use-react/useNumber;
const bool = useNumber(/* Parameters */);
```

| Parameters | Description|
| ------------- | ------------- |
| initialState | Initial state of our `Number`. Defaults to `0`. |

[Work in progress]

## Roadmap

[Work in progress]
