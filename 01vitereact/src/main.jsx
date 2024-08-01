import React from 'react'
import ReactDOM from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>My App !</h1>
        </div>
    )
}


/* Bellow const Object formate is not runable on Vite + react 

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

*/


const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'Click me to visit google ',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    // anotherElement
    // reactElement

    <App />
    // MyApp()
)

