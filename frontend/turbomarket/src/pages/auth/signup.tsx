import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      console.log('response', response);
    
    } catch (error) {
      console.log(error);
      
    }
  }

  return (
    <div className="grid grid-cols-2 justify-items-stretch">
        <div className='ml-20 row-span-full'>
      <form
        onSubmit={handleSubmit}
        className="bg-secondary p-6 rounded-lg shadow-xl w-full max-w-sm self-center justify-center"
      >
        <h2 className="text-lg font-medium mb-4">Sign Up</h2>
        {error && (
          <p className="text-red-500 mb-4">Error: {error}</p>
        )}
        <div className="mb-4">
          <label
            className="block font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
        >
          Sign Up
        </button>
        <Link href="/login">
          <p className="text-blue-500 hover:underline mt-4">
            Already have an account? Login
          </p>
        </Link>
      </form>
      </div>
    </div>
  )
}

export default SignUp
