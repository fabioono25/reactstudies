# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Some Tips about React

### Purity

In React, the term "purity" typically refers to the concept of pure components. A pure component is a React component that renders the same output given the same input. In other words, a pure component is a function of its props and state, and it does not rely on any external factors such as global variables or mutable state outside of its scope.

Pure components are important because they enable optimizations in React's rendering process. React can perform shallow comparisons between the previous and current props and state of a pure component to determine if it needs to re-render. If the props and state haven't changed, React can skip the rendering process for that component, resulting in performance improvements, especially in large applications with many components.


### Title

content

### Title

content

### Title

content

### Title

content

### Title

content

### Title

content

### Title

content

### Title

content

### Title

content

### Title

content

### Title

content

### Q&A

What is a component? A Javascript function that returns a markup (JSX).

What is JSX? Javascript eXtensionSkie. Some differences: camel case (e.g. className, instead of class).

Is there any option rather than JSX? You can use createElement function (annoying to use it).

"JSX expessions must have one parent element" Just one parent element is needed. div or a react fragment (<></>).

Passing data how? Props. You can pass anything as a prop (even other components - children property). function Test(props) {}

key prop. just to organize items in react (unique string or number). You can use the index during map as a key.

Rendering: using VDOM (Virtual DOM - Document Object Model). Stage changed? React diffs (what changed), Reconciliation (put it all together).

Event Handling: how React handles user interactions. onClick, onChange, onSubmit={handleIt}

Manage data: use state, with hooks like useState and useReducer. onChange={ e => setValue(e.target.value)}

Main React hooks: useState, useRedux, useContext, useRef, useEffect, useMemo, useCallback.

Purity: how React components should work. Pure component: Same input should always return the same output.

Strict Mode: mistakes at development time.

Effects: when we talk to external systems (HTTP request, async). useEffect hook.  useEffect(() => { fetchData().then(x => ...) , []})

Working directly with DOM: useRef <input ref={ref}>

Context: pass properties without props.

Portals: context for components (modals, dropdowns, tooltips).

Suspense: loading spinner/lazily loading a component.

Error Boundaries: catch app-breaking errors.

React State must be immutable: copy of old data + changes + change original with the new code.

Don't use useState for everything: server, URL, local storage types. Questions to be considered: can it be computed each render? some library possibly contains that state? does it need to be rendered?

