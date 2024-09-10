'use client'
import React from 'react'

const EventHandling = () => {

    const previewImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (output) => {
            const img = new Image();
            img.src = output.target.result;
            document.body.appendChild(img);
        }
        reader.readAsDataURL(file);
    }
    return (
        <div className="max-w-2xl mx-auto"
        on onMouseMove={(e)=>{console.log(e.clientX,e.clientY,e.movementX,e.movementY)}}>
            <h1 className="max-3xl text-center font-bold mt-5">Event handling</h1>


            <button className="bg-black p-3 rounded mt-4 text-white" onClick={() => { alert('button was clicked') }}>click me</button>
            <input
                className="w-full bg-grey-200 border py-1 px-3 rounded mt-4"
                onChange={(e) => { console.log(e.target.value); }}
                type="text" />
            <input type="color" className='mt-5'
                onChange={(e) => { console.log(document.body.style.backgroundcolor = e.target.value) }}
            />
            <input
                className='block mt-5'
                type="file"
                onChange={(e) => { console.log(e.target.files) }}
                multiple />
            <input type="file" onChange={previewImage} />

            <input
            className="py-1 px-3 rounded mt-5 bg-grey-200"
            onkeyDown={(e)=>{console.log(e.code)}}/>
        </div>
    )
}

export default EventHandling
