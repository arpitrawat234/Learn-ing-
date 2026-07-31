# React Quick Notes

## Components

* Components are JavaScript functions that return JSX.
* Component names must start with a capital letter.

## JSX

* Close every tag.
* Return a single parent element.
* Use `<>...</>` (Fragment) if you don't want an extra `<div>`.
* Use `className` instead of `class`.

## Displaying Data

* Use `{}` to embed JavaScript expressions in JSX.

## Conditional Rendering

* Render different UI based on a condition.
* Use `if`, `&&`, or the ternary operator (`? :`).

## Rendering Lists

* Use `.map()` to render lists.
* Every list item must have a unique `key`.

## Events

* Event names use camelCase (e.g., `onClick`).
* Pass the function, don't call it.

## State

* `useState()` adds state to a component.
* Updating state re-renders the component.
* Use `setState` to update state.
* Don't modify state directly.

## Hooks

* Hook names start with `use`.
* Call Hooks only at the top level of a component or custom Hook.

## Props

* Props are used to pass data from parent to child.
* Props are read-only.
* Use object destructuring to access prop values.

## Lifting State Up

* If multiple components need the same state, move the state to their closest common parent.
* Pass state and event handlers through props.


