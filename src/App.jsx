import { useState } from 'react'

function App() {

  const [points,setPoints]=useState([])
  const [data,setData]=useState([])
  const clickHanadle=e=>{
    setPoints((points)=>[...points,{
      x:e.clientX,
      y:e.clientY
    }])
  }

  const redoHandle=(e)=>{
    e.stopPropagation()
    const data=[...points]
    const item=data.pop()
    setData(data=>[...data,item])
    setPoints(data)
  }

  const undoHandle=e=>{
    e.stopPropagation()
    const dat=[...data]
    const item=dat.pop()
    setPoints(points=>[...points,item])
    setData(dat)
  }
  return (
    <div className="App" onClick={clickHanadle}>
      <div className='btn'>
        <button disabled={points.length===0} onClick={redoHandle}>Redo</button>
        <button disabled={data.length===0} onClick={undoHandle} >Undo</button>
      </div>
     {
      points.map((point,index)=>{
        return(
          <div key={index} className='point' style={{left:point.x,top:point.y}}/>
        )
      })
     }
    </div>
  )
}

export default App
