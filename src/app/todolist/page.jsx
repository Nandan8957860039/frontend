'use client';
import React, { useState } from 'react'

const todolist = () => {
    const [count, setCount] = useState(0);
    const [taskList, setTasklist] = useState([]);

    const addTask = (e) => {
        if (e.code === 'Enter') {
            console.log(e.target.value)
            const newTask = { text: e.target.value, completed: false, added: new Date() }
            setTasklist([newTask, ...taskList]);
            e.target.value = '';
        }
    }
    const deleteTask = (index) => {

        console.log(index);
        const temp = taskList;
        temp.splice(index, 1);
        setTasklist([...temp]);
    }
    const completeTask = (index) => {
        const temp = taskList;
        temp[index].completed = !temp[index].completed;
        setTasklist([...temp])
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
                        return <div key={index}>
                            {task.completed ? (
                                <p className='bg-green-600 text-white font-bold px-3 w-fit rounded-full'>finished</p>
                            ) : (
                                <p className="bg-yellow-600 text-white font-bold px-3 w-fit rounded-full">Pending</p>
                            )}
                            <p className={'text-lg '+(task.completed && 'line-through')}>{task.text}</p>
                            <div className='mt-4 flex justify-end gap-3'>
                                <button
                                    onClick={() => { completeTask(index) }}
                                    className="bg-blue-500 text-white px-4 py-1 rounded-full">complete</button>
                                <button
                                    onClick={() => { deleteTask(index) }}
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
