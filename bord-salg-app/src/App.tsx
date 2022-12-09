import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const texstenMin = isLoggedIn ? 
    <p>Du er logget inn</p> : 
    <p>Du er ikke logget inn</p>
  
    const [userSelected, setUserSelected] = useState(true)
    const output = userSelected ? "X" : "Y"
    const testFunksjon = (posEn: number, posTo: number) => {
      
      setUserSelected((setUserSelected) => !setUserSelected)
      console.log(arr)
      console.log(posEn, posTo)
    }

  const arr = [[" "," "," "],[" "," "," "],[" "," "," "]]
    
  const [board, setBoard] = useState([["2","2","2"],["2","2","2"],["2","2","2"]])

//const [board, setBoard] = useState([[" "," "," "],[" "," "," "],[" "," "," "]])

const handleClick = () => {
  setBoard(board => board.map((arr, i) => arr.map((item, j) => j === 0 && i === 0 ? "X" : item)))
}

console.log(board)

  return (
    <div className="App">

      <button>{board}</button>

      <h1 onClick={handleClick}>{output}</h1>
      
      <table>
        <tbody>
        <tr>
          <th onClick={() => testFunksjon(0,0)}>|{arr[0][0]}|</th>
          <th onClick={() => setUserSelected((setUserSelected) => !setUserSelected)}>|{arr[0][1]}|</th>
          <th>|{arr[0][2]}|</th>
        </tr>

        <tr>
          <th>|{arr[1][0]}|</th>
          <th>|{arr[1][1]}|</th>
          <th>|{arr[1][2]}|</th>
        </tr>

        <tr>
          <th>|{arr[2][0]}|</th>
          <th>|{arr[2][1]}|</th>
          <th>|{arr[2][2]}|</th>
        </tr>
        </tbody>
      </table>

    </div>
  )
}

export default App

/*
<div>
        <button onClick={() => setIsLoggedIn((isLoggedIn) => !isLoggedIn)}>
          test
        </button>
        {texstenMin}
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
*/