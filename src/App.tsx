import { useState,useEffect} from 'react'
import './App.css'

const initialState = [    
  {
  nick: 'dapelu',
  subMoths: 2,
  avatar: 'https://i.pravatar.cc/150?u=dapelu',
  description: 'a'
  },
  {
    nick: 'rodri',
    subMoths: 7,
    avatar: 'https://i.pravatar.cc/150?u=rodri'   
  }]

  
  interface Sub {
    nick: string
    subMoths: number
    avatar: string
    description?:string
}

function App() {
  const [subs, setSubs] = useState<Array<Sub>>([])

  useEffect(() => {
    setSubs(initialState)
  },[])

  return (
    <div>
      <h1>Subs</h1>
      <ul>
        {
          subs.map((sub) => (
            <li>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>{sub.nick} (<small>{sub.subMoths}</small>)</h4> 
              <p>{sub.description?.substring(0,100)}</p> 
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
