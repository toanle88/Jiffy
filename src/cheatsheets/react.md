---
title: React Cheatsheet
tags: react, javascript, frontend, hooks, components
---

# React Cheatsheet

## 🔑 JSX Basics

| Concept | Syntax |
|---------|--------|
| **JSX Element** | `const el = <h1>Hello</h1>;` |
| **Embed Expression** | `<h1>{variable}</h1>` |
| **Conditional Rendering** | `{condition ? <A /> : <B />}` |
| **Map Over Array** | `{items.map((item) => <li key={item.id}>{item.name}</li>)}` |
| **Class Names** | `<div className="container">` |
| **Style Object** | `<div style={{color: 'red', fontSize: '14px'}}>` |
| **Comments** | `{/* This is a comment */}` |
| **Fragment** | `<>Child1</><Child2>` or `<React.Fragment>` |

---

## 📚 Hooks

### useState
```javascript
const [state, setState] = useState(initialValue);
setState(newValue);
setState(prev => prev + 1); // Functional update
```

### useEffect
```javascript
useEffect(() => {
  // Side effect logic
  return () => {
    // Cleanup function (optional)
  };
}, [dependencies]); // Empty = runs once, [dep] = runs when dep changes
```

### useContext
```javascript
const value = useContext(MyContext);
// Use with MyContext.Provider in parent
```

### useReducer
```javascript
const [state, dispatch] = useReducer(reducer, initialState);
// reducer: (state, action) => newState
```

### useCallback
```javascript
const memoizedFn = useCallback(() => {
  // function body
}, [dependencies]);
```

### useMemo
```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### useRef
```javascript
const ref = useRef(initialValue);
// Access via ref.current
```

---

## 🧩 Component Patterns

| Pattern | Example |
|---------|---------|
| **Functional Component** | `function MyComponent(props) { return <div>...</div>; }` |
| **Arrow Function** | `const MyComponent = (props) => <div>...</div>;` |
| **Props Destructuring** | `const MyComponent = ({ name, age }) => ...` |
| **Default Props** | `MyComponent.defaultProps = { name: 'John' };` |
| **Prop Types** | `MyComponent.propTypes = { name: PropTypes.string };` |
| **Children** | `<MyComponent>{children}</MyComponent>` → access via `props.children` |
| **Spread Props** | `<Component {...props} />` |

---

## 🎯 State Management

### Props
```javascript
// Parent to Child
<Child message="Hello" onChange={handleChange} />
// In Child: props.message, props.onChange
```

### Context API
```javascript
const MyContext = React.createContext();

// Provider (parent)
<MyContext.Provider value={state}>
  <Child />
</MyContext.Provider>

// Consumer (child)
const value = useContext(MyContext);
```

### Lifting State Up
```javascript
// Move shared state to common parent, pass down via props
```

---

## 🔄 Common Patterns

| Pattern | Use Case |
|---------|----------|
| **Conditional Rendering** | Show/hide elements based on state |
| **Lists & Keys** | Always use `key` for list items (unique identifier) |
| **Event Handling** | `onClick`, `onChange`, `onSubmit` with handler functions |
| **Controlled Components** | Input value tied to state |
| **Uncontrolled Components** | Use refs to access DOM directly |

### Lists
```javascript
// Always use key prop
{items.map((item) => (
  <li key={item.id}>{item.name}</li>
))}
```

---

## 📝 Forms

### Controlled Input
```javascript
const [value, setValue] = useState('');

<input 
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### Form Submission
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  // Handle form data
};

<form onSubmit={handleSubmit}>
  <input type="text" />
  <button type="submit">Submit</button>
</form>
```

### Multiple Inputs
```javascript
const [form, setForm] = useState({ name: '', email: '' });

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
};
```

---

## ⚡ Performance Optimization

| Optimization | Purpose |
|--------------|---------|
| **React.memo** | Prevent re-render if props haven't changed |
| **useMemo** | Memoize expensive computations |
| **useCallback** | Memoize function references |
| **Code Splitting** | Dynamic imports with `React.lazy()` and `Suspense` |
| **Avoid Inline Objects** | Move objects/arrays outside render to prevent new references |

### React.memo
```javascript
const MyComponent = React.memo(({ name }) => <div>{name}</div>);
```

### Lazy Loading
```javascript
const LazyComponent = React.lazy(() => import('./Component'));

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

---

*Created with ❤️ for Frontend Developers*
