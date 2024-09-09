import Button from '@/components/Button';
import Input from '@/components/input';
import React from 'react'

const singnup = () => {
    return (
        <div>
            singnup
            <Button>My Button</Button>
            <Button>sumbit</Button>
            <Button>Know more</Button>
            <Button>ghar chale</Button>
            <Input id='name' label='Name' type="text" placeholder="enter your name" />
            <Input id='email' label='Email' type="email" placeholder="enter your email" />
            <Input id='password' label='password' type="password" placeholder="enter a password" />
        </div>
        
    )
}

export default singnup
