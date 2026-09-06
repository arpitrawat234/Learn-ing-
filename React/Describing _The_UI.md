A React component is a JavaScript function that you can sprinkle with markup., reusable UI elements for your app

a React component is a JavaScript function that you can sprinkle with markup.

export default function App(){
    return(
        <>
        <img src="">
        </>
    );
}

React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!

<section> is lowercase, so React knows we refer to an HTML tag.
<Profile /> starts with a capital P, so React knows that we want to use our component called Profile.

// a componenet
function Paragraph(){
    return(
        <>
        <p>This is a para</p>
        </>
    );
}

Data is transferred from Parent component to Child Component. though props.





