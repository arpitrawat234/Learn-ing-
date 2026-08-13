The component functions should start with uppercase

(where to declare handler fucntions){

Default to INSIDE your component function. It matches modern React community convention 

Move OUTSIDE only if the function contains dense,  logic, or share  handler function across different component files.
}



To collect data from multiple children, or to have two child components communicate with each other, declare the shared state in their parent component instead. The parent component can pass that state back down to the children via props. This keeps the child components in sync with each other and with their parent.

The react only renders when their is a change in the variable i.e changes in memory addresses.

<Square value={squares[0]} onSquareClick={handleClick(0)} /> this dont works as the handleClick(0) rerender the state of the sqaure and the board again and again

usestate uses smallcase hooks uses small case.

Keys tell React about the identity of each component, which allows React to maintain state between re-renders. If a component’s key changes, the component will be destroyed and re-created with a new state.

Keys do not need to be globally unique; they only need to be unique between components and their siblings.

JSX
Save it inside variables Push it into arraysPass it as arguments into functions Return it from conditional statements (if/else)