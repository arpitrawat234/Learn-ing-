

Phase 2 — Describing the UI (2–3 days)

Read:

✅ Your First Component
✅ Importing and Exporting Components
✅ Writing Markup with JSX
✅ JavaScript in JSX with Curly Braces
✅ Passing Props
✅ Conditional Rendering
✅ Rendering Lists
✅ Keeping Components Pure

Skip nothing here.

Phase 3 — Adding Interactivity (4–6 days)

Read:

✅ Responding to Events
✅ State: A Component's Memory
✅ Render and Commit
✅ State as a Snapshot
✅ Queueing a Series of State Updates
✅ Updating Objects in State
✅ Updating Arrays in State

These chapters are extremely important because they explain React's mental model.

🚀 Build Project #1

Rebuild your Quotes App.

Features:

API fetch
New Quote button
Loading state
Error state

Do not continue reading until you build it.

Phase 4 — Managing State (2–4 days)

Read:

✅ Reacting to Input with State
✅ Choosing the State Structure
✅ Sharing State Between Components
✅ Preserving and Resetting State

Now you'll understand:

"Where should this state live?"

🚀 Build Project #2

Rebuild your Notes App.

Include:

Add note
Delete note
Edit note
Local Storage
Search
Character count
Phase 5 — Escape Hatches (3–5 days)

Read:

✅ Referencing Values with Refs
✅ Manipulating the DOM with Refs
✅ Synchronizing with Effects
✅ You Might Not Need an Effect
✅ Lifecycle of Reactive Effects
✅ Separating Events from Effects
✅ Removing Effect Dependencies

These chapters prevent many common useEffect mistakes.

Phase 6 — Reusing Logic (2–3 days)

Read:

✅ Reusing Logic with Custom Hooks

Then refactor your projects.

Extract logic like:

useFetchQuotes()

or

useLocalStorage()
Phase 7 — Context (2–3 days)

Read:

✅ Passing Data Deeply with Context

Build:

Theme Toggle

App
 ├── Navbar
 ├── Sidebar
 └── Settings

without prop drilling.

Phase 8 — Reducers (2–3 days)

Read:

✅ Extracting State Logic into a Reducer

Refactor your Notes App.

Instead of many useStates:

setNotes(...)
setSelected(...)
setEditing(...)

use

dispatch({
    type: "ADD_NOTE"
})

This will help you understand why reducers exist.

Phase 9 — Scaling

Read:

✅ Scaling Up with Reducer and Context

This is when the chapter finally makes sense.

After react.dev

Now learn:

React Router
Forms (if you want additional practice)
TanStack Query
Redux Toolkit (only after you understand Context and useReducer)