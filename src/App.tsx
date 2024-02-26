import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState<any>(null)
  useEffect(()=>{
    fetchAdvice()
  },[])
  const fetchAdvice = async()=>{
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setData(data)
 }

  return (
    <>
      <div className='container'>
        <div>{data?.slip?.id}</div>
        <div>"{data?.slip?.advice}"</div>
        <button onClick={fetchAdvice}>s</button>
      </div>
      
    </>
  )
}

export default App
