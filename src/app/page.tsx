'use client'

import React, { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email)
  console.log(typeof email)

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div>
      <h1>Hello world</h1>
      <form 
        onSubmit={handleSubmit}
        className='flex flex-col gap-2'
      >
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} className='text-black' required />
        </label>
        <label>
          Password:
          <input type="password" value={password} className='text-black' onChange={handlePasswordChange} required />
        </label>
        <input 
          type="submit" 
          value="Submit" 
          className='bg-blue-500 max-w-[200px] cursor-pointer'
          />
      </form>
    </div>
  );
}