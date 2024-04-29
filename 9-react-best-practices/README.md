# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Some Tips about React

### Purity


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