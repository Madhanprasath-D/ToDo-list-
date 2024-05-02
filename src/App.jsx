import { useState } from 'react'
import './App.css'

function App() {
  const [item, setitem] = useState("")
  const [datalist, setdatalist] = useState([])


  const list_data = datalist.map((ele, ind) => {
    return (
      <li>
        <div className="check">
          <input type="checkbox" className='checkbox'/>
          <p>{ele}</p>
        </div>
        <button className='rem_btn' onClick={()=>rem_list(ind)}>Remove</button>
      </li>
    )
  })

  function add_item() {
    if (!item){
      alert("Enter the task...")
    }
    else{
      setdatalist([...datalist, item])
      setitem("")
    }
  }
  
  function rem_list(ind){
    const modify_list = datalist.filter((ele,list_ind)=>list_ind!=ind)
    setdatalist(modify_list)
  }
  return (
    <>
      <div className="continer">
        <h4>ToDo List</h4>
        <div className="input_div">
          <input type="text" placeholder='What did you want to do today?' onChange={(e) => {
            setitem(e.target.value)
          }} value={item} className='input' />
          <button className="add_btn" onClick={() => {
            add_item()
          }}>Add</button>
        </div>
        <div className="result" >
          {list_data}
        </div>
      </div>
    </>
  )
}

export default App
