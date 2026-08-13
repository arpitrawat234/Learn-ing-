 This is called one-way data flow because the data flows down from the top-level component to the ones at the bottom of the tree.(Flow of data and components form parents to child).

 Think of state as the minimal set of changing data that your app needs to remember.

 Which of these are state?

Does it remain unchanged over time? If so, it isn’t state.
Is it passed in from a parent via props? If so, it isn’t state.
Can you compute it based on existing state or props in your component? If so, it definitely isn’t state!

