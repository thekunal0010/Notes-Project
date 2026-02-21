import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')
  const [text, settext] = useState('')
  const [task, settask] = useState([])

    const sub = (e)=>{
      e.preventDefault()

      const copyTask=[...task]
      copyTask.push({title,text})
      settask(copyTask)

      settitle('')
      settext('')
    }

    const del = (idx) =>{
      const copyTask=[...task]
      copyTask.splice(idx,1)
      settask(copyTask)
    }


  return (
    <div className='bg-black h-screen lg:flex text-white p-10'>
      <form onSubmit={(e)=>{
        sub(e)
      }} 
      className='lg:w-1/2 flex p-10 gap-4 flex-col items-start'> 
      <h1 className='text-3xl font-bold'>Add Notes</h1>       
        <input 
        type='text' 
        placeholder='Heading' 
        className='px-5 py-2 rounded border-2 w-full outline-none' 
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
         />


        <textarea 
        type='text' 
        placeholder='Enter text' 
        value={text}
        className='px-5 py-2 rounded border-2  h-32 w-full outline-none'
        onChange={(e)=>{
          settext(e.target.value)

        }} />


        <button 
        className='bg-white text-black w-full outline-none rounded active:bg-gray-600' >
          Add Note
        </button>


      </form>  
      <div className=' p-10 lg:w-1/2 lg:border-l-2'>
      <h1 className='text-3xl font-bold'>Your Notes</h1>
      <div className='flex felx-wrap gap-5 mt-5 h-full overflow-auto items-start justify-start'>
         
         {task.map(function(elem,idx){
           return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.text}</p>
              </div>
              <button onClick={()=>{
                del(idx)
              }} className='w-full bg-red-400 active:bg-red-700 text-white text-xs rounded '>
                Delete
              </button>
          </div>
         })}                  
         
      </div> 
      </div>          
    </div>
  )
}

export default App
