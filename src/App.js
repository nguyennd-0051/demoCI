import React from 'react'
import logo from './logo.svg'
import './App.css'

const getTest = () => {
    return 'sdjfhsssfjsdhfjsdhfjksdhfjkashdflskdfhajsdhfksjhdfjksdhfjksdhfjkdhjkf sjdfhjsdfhsjdhfjsdfhjsdfhjsfhjdsfhjsfhjfhsjkfhskjhfskjdhfjsdfhjksdhfjsd'
}

function App () {
    const aaa = getTest()

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <h1>test ket hop</h1>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    from highland
                    this is new Learn React {aaa}
                </a>
            </header>
        </div>
    )
}

export default App
