'use client'

import React, { useState } from 'react';
import { loginFormSchema } from '@/schemas';


export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<any>([])

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let result = loginFormSchema.safeParse({ email, password });
    if (result.success) {
      console.log('success')
    } else {
      console.log(result)
      setError(result.error.errors[0])
    }
    console.log(result)
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
          {
            error?.path[0] === "email" && <span className='text-red-500'>qwe</span>
          }
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