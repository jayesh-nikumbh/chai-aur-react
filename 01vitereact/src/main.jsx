import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom app</h1>
        </div>
    )
}

// const ReactElement = {
//     type:'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     childen: 'Click me to visit google'   
// }

const anotherUser = "chai aur code"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit google',
    anotherUser
)

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

createRoot(document.getElementById('root')).render(
    // MyApp() - we can also run the function like this
    // reactElement , <reactElement /> , reactElement() - this are not going to worl becuase they are not follow any rules for the object which we are passing them as a render 
    // anotherElement
     reactElement
    
)
