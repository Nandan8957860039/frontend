'use client';
import React, { useState } from 'react'

const todolist = () => {
    const [count, setCount] = useState(0);
    const [taskList, setTasklist] = useState([
        { text: 'learn HTMl', completed: false, added: new Date() },
        { text: 'learn Css', completed: false, added: new Date() },
        { text: 'learn 3s', completed: false, added: new Date() },
    ]);

    const addTask = (e) => {
        if (e.code === 'enter') {
            console.log(e.target.value)
            e.target.value = '';
        }
    }
    return (
        <div>
            {/* <h1 className='text-4xl'>{count}</h1> */}
            {/* <button onClick={() => { setCount(count + 1); console.log(count); }}>Add count</button> */}

            <h1 className='text-uppercase font-bold text-5xl text-center'>Todolist</h1>
            <div className='border shadow rounded-lg p-5'>
                <div className='p-5 border-b-2'>
                    <input
                        onKeyDown={addTask}
                        type="text"
                        placeholder='😁Enter a task to add....'
                        className='py-1 px-3 w-full bg-grey-300 border' />
                </div>

                <div>{
                    taskList.map((task, index) => {
                        return <div key={index}><p>{task.text}</p>
                            <div className='mt-4 flex justify-end gap-3'>
                                <button className="bg-blue-500 text-white px-4 py-1 rounded-full">complete</button>
                                <button
                                    className='bg-red-500 text-white px-4 py-1 rounded-full'>delete</button>
                            </div>
                        </div>
                    })
                }</div>
            </div>
        </div>
    )
}

export default todolist
